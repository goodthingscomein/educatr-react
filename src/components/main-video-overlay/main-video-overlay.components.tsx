import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  // var-name: type
  // var-function: () => any
};

// Render Component
const MainVideoOverlay: React.FC<Props> = ({ children }) => (
  <div>
    <h1>Hello World!</h1>
  </div>
);

const mapStateToProps = (state: State) => ({
  // var-name: state.reducer.value,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // var-function: (value: type) => dispatch(importedFunction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainVideoOverlay);
