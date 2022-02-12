import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setYourUnitsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { PageContainer, ContentContainer } from './unit-details.styles';

// Import sub pages
import OverviewSubPage from './sub-pages/overview/overview.pages';
import RecordingsSubPage from './sub-pages/recordings/recordings.pages';
import ResourcesSubPage from './sub-pages/resources/resources.pages';
import NotFoundPage from '../not-found/not-found.pages';
import SubPageHeader from '../../components/sub-page-header/sub-page-header.components';
import { NavigationTabType } from '../../components/tabbed-navigation/tabbed-navigation.components';

type Props = {
  // Drawer button nav url management
  setYourUnitsNavigationUrl: typeof setYourUnitsNavigationUrl;
};

// Render Component
const UnitDetailsPage: React.FC<Props> = ({ setYourUnitsNavigationUrl }) => {
  // Get the unit ID params in the URL
  const { unitId } = useParams();

  // The tabbed navigation items
  const unitDetailsNavigationTabs: NavigationTabType[] = [
    {
      label: 'Overview',
      to: 'overview',
      urlRegexMatch: /overview$/g,
    },
    {
      label: 'Recordings',
      to: 'recordings',
      urlRegexMatch: /recordings$/g,
    },
    {
      label: 'Resources',
      to: 'resources',
      urlRegexMatch: /resources$/g,
    },
    {
      label: 'Assessments',
      to: 'assessments',
      urlRegexMatch: /assessments$/g,
    },
    {
      label: 'Grades',
      to: 'grades',
      urlRegexMatch: /grades$/g,
    },
    {
      label: 'Discussions',
      to: 'discussions',
      urlRegexMatch: /discussions$/g,
    },
  ];

  return (
    <PageContainer>
      <SubPageHeader
        heading={`${unitId?.toUpperCase()} - Fundamentals of Discrete Mathematics`}
        navigationTabs={unitDetailsNavigationTabs}
        searchHint={`Search in ${unitId?.toUpperCase()}...`}
        onSearchSubmitListener={(input) => console.log(input)}
        rootUrl={`/units/${unitId}`}
        backNavUrl='/units/current'
        navigationDispatch={setYourUnitsNavigationUrl}
      />
      <ContentContainer>
        <Routes>
          <Route path='/overview' element={<OverviewSubPage />} />
          <Route path='/recordings' element={<RecordingsSubPage />} />
          <Route path='/resources' element={<ResourcesSubPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </ContentContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setYourUnitsNavigationUrl: (newUrl: string) => dispatch(setYourUnitsNavigationUrl(newUrl)),
});

export default connect(null, mapDispatchToProps)(UnitDetailsPage);
