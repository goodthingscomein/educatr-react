import React from 'react';

import {} from './overview.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  // var-name: type
  // var-function: () => any
};

// Render Component
const OverviewSubPage: React.FC<Props> = ({ children }) => (
  <div>
    <h1>Overview Sub Page!</h1>
  </div>
);

export default OverviewSubPage;
