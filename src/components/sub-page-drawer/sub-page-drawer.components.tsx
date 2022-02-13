import React from 'react';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  // var-name: type
  // var-function: () => any
};

// Render Component
const SubPageDrawer: React.FC<Props> = ({ children }) => (
  <div>
    <h1>Hello World!</h1>
  </div>
);

export default SubPageDrawer;
