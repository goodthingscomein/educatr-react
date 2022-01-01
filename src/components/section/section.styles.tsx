import styled, {css} from 'styled-components';
import {ColorTypes} from '../../type-declarations/styled';

// Section props
interface SectionContainerProps {
  backgroundColor?: ColorTypes;
  imgUrl?: string;
  imgDarken?: number;

  // Section padding
  horizontalPadding?: number;
  verticalPadding?: number;
  hasColumns?: boolean;

  // Hero Section for landing page
  isHeroSection?: boolean;

  // Inset box shadow
  hasBoxShadow?: boolean;
}

// Css for background image
const BackgroundImageStyles = css<SectionContainerProps>`
  background: linear-gradient(
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5}),
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5})
    ),
    url(${(props) => props.imgUrl});
`;

// Css for Hero Section for landing pages
const HeroSectionStyles = css`
  height: calc(100vh - ${(props) => props.theme.appBar.appBarHeight});
  padding: 0 120px;
  justify-content: center;
  align-items: center;
`;

// Css for column support
const ColumnSectionStyles = css`
  flex-direction: row;
  padding: 0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

// Css for inset box shadow
const BoxShadowStyles = css`
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.6);
`;

export const SectionContainer = styled.div<SectionContainerProps>`
  width: 100%;
  margin: 0;
  padding: ${(props) => props.verticalPadding ?? 80}px ${(props) => props.horizontalPadding ?? 160}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  // Background
  background-color: ${(props) => props.theme.getColor(props.backgroundColor || 'black')};
  ${(props) => (props.imgUrl ? BackgroundImageStyles : '')}

  // Inset box shadow
  ${(props) => (props.hasBoxShadow ? BoxShadowStyles : '')}

  // Hero section for landing page
  ${(props) => (props.isHeroSection ? HeroSectionStyles : '')}

  // Column formatted section
  ${(props) => (props.hasColumns ? ColumnSectionStyles : '')}
`;
