import React from 'react';

// Import Redux
import { connect } from 'react-redux';
import { setYourNotesNavigationUrl } from '../../redux/navigation/navigation.actions';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  PageContainer,
  ButtonsGroupContainer,
  BreadcrumbsTopBarContainer,
  ContentContainer,
  NotesContentContainer,
  NotesHeaderContainer,
} from './notes.styles';

// Import custom components
import SubPageDrawer from '../../components/sub-page-drawer/sub-page-drawer.components';
import SubPageDrawerHeader from '../../components/sub-page-drawer-header/sub-page-drawer-header.components';
import SubPageTopBar from '../../components/sub-page-top-bar/sub-page-top-bar.components';
import SearchBar from '../../components/search-bar/search-bar.components';
import OptionsButton from '../../components/options-button/options-button.components';
import CopyText from '../../components/copy-text/copy-text.components';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.components';

// Component props
type Props = {
  setYourNotesNavigationUrl: typeof setYourNotesNavigationUrl;
};

// Render Component
const NotesPage: React.FC<Props> = ({ setYourNotesNavigationUrl }) => {
  return (
    <PageContainer>
      <SubPageDrawer>
        <SubPageDrawerHeader heading='Notes'>
          <SearchBar searchHint={'Search all notes...'} onSearchSubmitListener={(input) => console.log(input)} />
        </SubPageDrawerHeader>
      </SubPageDrawer>
      <ContentContainer>
        <SubPageTopBar backgroundColor={'primary'}>
          <CopyText size='large' color={'white'}>
            ACCG 1000 Notes
          </CopyText>
          <ButtonsGroupContainer>
            <SearchBar
              searchHint={'Search in "ACCG 1000 Notes"'}
              onSearchSubmitListener={(input) => console.log(input)}
              hasLightTheme
              canToggle
            />
            <OptionsButton hasLightTheme />
          </ButtonsGroupContainer>
        </SubPageTopBar>
        <BreadcrumbsTopBarContainer>
          <Breadcrumbs
            rootBreadcrumbUrl={'/notes'}
            additionalBreadcrumbs={[
              { name: 'ACCG', url: '/notes/accg' },
              { name: 'ACCG1000', url: '/notes/accg/accg1000' },
              { name: 'Week 7', url: '/notes/accg/accg1000/week7' },
              { name: 'Ella is cute', url: '/notes/accg/accg1000/week7/ella-is-cute' },
            ]}
            navigationDispatch={setYourNotesNavigationUrl}
          />
        </BreadcrumbsTopBarContainer>
        <NotesHeaderContainer>Test</NotesHeaderContainer>
        <NotesContentContainer></NotesContentContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setYourNotesNavigationUrl: (url: string) => dispatch(setYourNotesNavigationUrl(url)),
});

export default connect(null, mapDispatchToProps)(NotesPage);
