import React from 'react';

import {} from './practice.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  // var-name: type
  // var-function: () => any
};

// Render Component
const PracticeSubPage: React.FC<Props> = ({ children }) => (
  <div>
    <h1>Practice Sub Page!</h1>
  </div>
);

export default PracticeSubPage;
