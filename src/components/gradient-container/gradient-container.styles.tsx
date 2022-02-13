import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// Section props
interface SectionContainerProps {
  gradientColor1: ColorTypes;
  gradientColor2: ColorTypes;
  gradientColor3: ColorTypes;
}

export const GradientBackgroundContainer = styled.div<SectionContainerProps>`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;

  // Gradient BG
  background: ${(props) => props.gradientColor1};
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.getColor(props.gradientColor1)} 0%,
    ${(props) => props.theme.getColor(props.gradientColor2)} 55%,
    ${(props) => props.theme.getColor(props.gradientColor3)} 80%
  );
`;
