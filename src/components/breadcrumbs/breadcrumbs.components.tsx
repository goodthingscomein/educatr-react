import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import utils
import clampNumber from '../../utils/clampNumber';

// Import styles
import { BreadcrumbsContainer } from './breadcrumbs.styles';

// Import custom components
import Link from '../link/link.components';
import CopyText from '../copy-text/copy-text.components';
import Margin from '../margin/margin.components';
import Icon from '../icon/icon-components';
import { NavigationAction } from '../../redux/navigation/navigation.types';

// Import custom icons
import NotesIcon from '@mui/icons-material/Notes';

export type BreadcrumbType = {
  url: string;
  name: string;
};

// Component Props Interface
type Props = {
  rootBreadcrumbUrl: string;
  numberOfBreadcrumbsToShow?: number;
  additionalBreadcrumbs?: BreadcrumbType[];
  navigationDispatch: (newUrl: string) => NavigationAction;
};

// Render Component
const Breadcrumbs: React.FC<Props> = ({
  rootBreadcrumbUrl,
  numberOfBreadcrumbsToShow,
  additionalBreadcrumbs,
  navigationDispatch,
}) => {
  // Clamp the number of breadcrumbs to show from 1 to 10
  const clampedNumberOfBreadcrumbsToShow = numberOfBreadcrumbsToShow
    ? clampNumber(numberOfBreadcrumbsToShow, 1, 10)
    : 10;

  // Additional breadcrumbs to show
  let additionalBreadcrumbsToShow: BreadcrumbType[] = [];
  if (additionalBreadcrumbs != null && additionalBreadcrumbs.length > 0) {
    // Create the array of breadcrumbs to show
    additionalBreadcrumbsToShow = additionalBreadcrumbs.filter(
      (val, i) => i > additionalBreadcrumbs.length - clampedNumberOfBreadcrumbsToShow
    );
  }

  // Breadcrumb navigation click action
  const navigate = useNavigate();
  const breadcrumbClickAction = (newUrl: string) => {
    navigationDispatch(newUrl);
    navigate(newUrl);
  };

  // Root breadcrumb component
  const RootBreadcrumbComponent = (
    <Link color={'white'} clickAction={() => breadcrumbClickAction(rootBreadcrumbUrl)}>
      <Icon padding='8px'>
        <NotesIcon fontSize='small' />
      </Icon>
      <Margin width='2px' />
    </Link>
  );

  // Render all breadcrumbs
  return (
    <BreadcrumbsContainer>
      {RootBreadcrumbComponent}
      {additionalBreadcrumbsToShow.map((breadcrumb, index) => {
        return (
          <>
            <Margin width='8px' />
            <CopyText size={'small'} color={'white'}>
              /
            </CopyText>
            <Margin width='8px' />
            <Link
              fontSize='small'
              fontWeight={index + 1 === additionalBreadcrumbsToShow.length ? 600 : 300}
              color={index + 1 === additionalBreadcrumbsToShow.length ? 'white' : 'lightGrey'}
              clickAction={() => breadcrumbClickAction(breadcrumb.url)}
            >
              {breadcrumb.name}
            </Link>
          </>
        );
      })}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
