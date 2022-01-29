import React from 'react';

import {} from './notes.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  // var-name: type
  // var-function: () => any
};

// Render Component
const NotesSubPage: React.FC<Props> = ({ children }) => (
  <div>
    <h1>Notes Sub Page!</h1>
  </div>
);

export default NotesSubPage;
