import styled from 'styled-components';
import {ColorTypes} from '../../type-declarations/styled';

// To add props
interface AppBarContainerProps {
  color: ColorTypes;
}

export const AppBarRelativeContainer = styled.div`
  position: relative;
  height: 0;
  width: 100%;
`;

export const AppBarContainer = styled.div<AppBarContainerProps>`
  width: 100%;
  height: ${(props) => props.theme.appBar.appBarHeight};
  background-color: ${(props) => props.theme.getColor(props.color)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
