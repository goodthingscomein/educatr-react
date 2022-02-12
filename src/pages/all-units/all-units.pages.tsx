import React from 'react';

// Import development data
import units from '../../data/units.data';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setYourUnitsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { PageContainer, ContentContainer } from './all-units.styles';

// Import custom components
import SubPageHeader from '../../components/sub-page-header/sub-page-header.components';
import { NavigationTabType } from '../../components/tabbed-navigation/tabbed-navigation.components';
import UnitCard from '../../components/unit-card/unit-card.components';
import CardCollection from '../../components/card-collection/card-collection.components';

type Props = {
  // Drawer button nav url management
  setYourUnitsNavigationUrl: typeof setYourUnitsNavigationUrl;
};

// Render Component
const AllUnitsPage: React.FC<Props> = ({ setYourUnitsNavigationUrl }) => {
  // The tabbed navigation items
  const allUnitsNavigationTabs: NavigationTabType[] = [
    {
      label: 'Current Units',
      to: 'current',
      urlRegexMatch: /current$/g,
    },
    {
      label: 'Completed Units',
      to: 'completed',
      urlRegexMatch: /completed$/g,
    },
    {
      label: 'Upcoming Units',
      to: 'upcoming',
      urlRegexMatch: /upcoming$/g,
    },
    {
      label: 'All Units',
      to: 'all',
      urlRegexMatch: /all$/g,
    },
  ];

  // Render the Your Units page
  return (
    <PageContainer>
      <SubPageHeader
        heading={'Your Units'}
        navigationTabs={allUnitsNavigationTabs}
        searchHint='Search all units...'
        onSearchSubmitListener={(input) => console.log(input)}
        rootUrl='/units'
        navigationDispatch={setYourUnitsNavigationUrl}
      />
      <ContentContainer>
        <CardCollection numberOfColumns={4} numberOfCards={units.length}>
          {units.map((unit, index) => {
            return <UnitCard key={unit.code} unit={unit} index={index} />;
          })}
        </CardCollection>
      </ContentContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setYourUnitsNavigationUrl: (newUrl: string) => dispatch(setYourUnitsNavigationUrl(newUrl)),
});

export default connect(null, mapDispatchToProps)(AllUnitsPage);
