import styled, {css} from 'styled-components';
import {ColorTypes} from '../../type-declarations/styled';

// Section props
interface SectionContainerProps {
  backgroundColor?: ColorTypes;
  imgUrl?: string;
  imgDarken?: number;

  hasGradientBackground?: boolean;
  gradientColor1?: ColorTypes;
  gradientColor2?: ColorTypes;
  gradientColor3?: ColorTypes;

  // Section padding
  horizontalPadding?: number;
  verticalPadding?: number;
  hasColumns?: boolean;
  minHeight?: string;

  // Hero Section for landing page
  isHeroSection?: boolean;
}

// Css for background image
const BackgroundImageStyles = css<SectionContainerProps>`
  background: linear-gradient(
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5}),
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5})
    ),
    url(${(props) => props.imgUrl});
`;

const BackgroundGradientStyles = css<SectionContainerProps>`
  background: ${(props) => props.theme.getColor(props.gradientColor1 || 'primary')};
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.getColor(props.gradientColor1 || 'primary')} 0%,
    ${(props) => props.theme.getColor(props.gradientColor2 || 'secondary')} 70%,
    ${(props) => props.theme.getColor(props.gradientColor3 || 'tertiary')} 100%
  );
`;

// Css for Hero Section for landing pages
const HeroSectionStyles = css`
  height: 100vh;
  padding: 0 120px;
  padding-top: ${(props) => props.theme.appBar.appBarHeight};
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
`;

// Css for column support
const ColumnSectionStyles = css`
  flex-direction: row;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SectionContainer = styled.section<SectionContainerProps>`
  width: 100%;
  margin: 0;
  min-height: ${(props) => props.minHeight ?? 0};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  // Background
  background-color: ${(props) => props.theme.getColor(props.backgroundColor || 'black')}; // Standard Color
  ${(props) => (props.imgUrl ? BackgroundImageStyles : '')} // Image
  ${(props) => (props.hasGradientBackground ? BackgroundGradientStyles : '')} // Gradient

  // Hero section for landing page
  ${(props) => (props.isHeroSection ? HeroSectionStyles : '')}

  // Column formatted section
  ${(props) => (props.hasColumns ? ColumnSectionStyles : '')}

  // Override padding
  padding: ${(props) => props.verticalPadding ?? 80}px ${(props) => props.horizontalPadding ?? 160}px;
`;
