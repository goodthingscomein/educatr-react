import styled, {css} from 'styled-components';
import {ColorTypes} from '../../type-declarations/styled';

// Column props
interface ColumnContainerProps {
  backgroundColor?: ColorTypes;
  imgUrl?: string;
  imgDarken?: number;
}

// Css for background image
const BackgroundImageStyles = css<ColumnContainerProps>`
  background: linear-gradient(
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5}),
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5})
    ),
    url(${(props) => props.imgUrl});
`;

export const ColumnContainer = styled.div<ColumnContainerProps>`
  width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 12px;
  overflow: hidden;

  // Background
  background-color: ${(props) => props.theme.getColor(props.backgroundColor ?? 'transparent')};
  ${(props) => (props.imgUrl ? BackgroundImageStyles : '')}
`;
