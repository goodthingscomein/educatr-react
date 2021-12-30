import React from 'react';

// Component Props Interface
type Props = {
  children?: JSX.Element | JSX.Element[];
  // var-name: type
  // var-function: () => any
};

// Render Component
const Section: React.FC<Props> = ({children}) => (
  <div>
    <h1>Hello World!</h1>
  </div>
);

export default Section;
