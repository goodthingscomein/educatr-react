import styled from 'styled-components';

// Card image props
interface CardImageContainerProps {
  imageBrightness?: number;
}

export const CardImageContainer = styled.img<CardImageContainerProps>`
  width: 100%;
  height: auto;
  filter: brightness(${(props) => props.imageBrightness ?? 1});
`;
