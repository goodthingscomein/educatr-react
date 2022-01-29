import React from 'react';

import {} from './resources.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  // var-name: type
  // var-function: () => any
};

// Render Component
const ResourcesSubPage: React.FC<Props> = ({ children }) => (
  <div>
    <h1>Resources Sub Page!</h1>
  </div>
);

export default ResourcesSubPage;
