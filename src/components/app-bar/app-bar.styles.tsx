import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// To add props
interface AppBarContainerProps {
  color: ColorTypes;
  padding?: string;
  justifyContent?: string;
}

export const AppBarContainer = styled.div<AppBarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  width: 100%;
  height: ${(props) => props.theme.appBar.appBarHeight};
  background-color: ${(props) => props.theme.getColor(props.color)};
  border-bottom: 1px solid ${(props) => props.theme.themeColors.lighten};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  padding: 0 40px 0 10px;
`;

export const AppBarItemsContainer = styled.div`
  display: flex;
  margin: 0;
`;
