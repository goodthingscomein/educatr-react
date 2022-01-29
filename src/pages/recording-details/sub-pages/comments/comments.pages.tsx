import React from 'react';

import {} from './comments.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  // var-name: type
  // var-function: () => any
};

// Render Component
const CommentsSubPage: React.FC<Props> = ({ children }) => (
  <div>
    <h1>Comments Sub Page!</h1>
  </div>
);

export default CommentsSubPage;
