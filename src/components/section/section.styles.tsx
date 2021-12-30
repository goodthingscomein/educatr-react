import styled from 'styled-components';
import {ColorTypes} from '../../type-declarations/styled';

// Colored background
interface HeroContainerProps {
  backgroundColor?: ColorTypes;
  imgUrl?: string;
  imgDarken?: number;
}
export const HeroContainer = styled.div<HeroContainerProps>`
  width: 100%;
  height: calc(100vh - ${(props) => props.theme.appBar.appBarHeight});
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Background
  background-color: ${(props) => props.theme.getColor(props.backgroundColor || 'black')};
  background: linear-gradient(
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5}),
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5})
    ),
    url(${(props) => props.imgUrl});
`;
