import React from 'react';

import {} from './discussion.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  // var-name: type
  // var-function: () => any
};

// Render Component
const DiscussionSubPage: React.FC<Props> = ({ children }) => (
  <div>
    <h1>Discussion Sub Page!</h1>
  </div>
);

export default DiscussionSubPage;
