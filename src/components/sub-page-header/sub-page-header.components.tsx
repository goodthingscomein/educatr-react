import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  // var-name: type
  // var-function: () => any
};

// Render Component
const SubPageHeader: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default SubPageHeader;
