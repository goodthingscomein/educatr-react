import styled, {css} from 'styled-components';
import {ColorTypes} from '../../type-declarations/styled';

// Colored background
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
}

// Css for background image
const BackgroundImageStyles = css<SectionContainerProps>`
  background: linear-gradient(
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5}),
      rgba(0, 0, 0, ${(props) => props.imgDarken ?? 0.5})
    ),
    url(${(props) => props.imgUrl});
`;

// Css for column support
const ColumnSectionStyles = css`
  flex-direction: row;
  padding: 0 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Css for Hero Section for landing pages
const HeroSectionStyles = css`
  height: calc(100vh - ${(props) => props.theme.appBar.appBarHeight});
  padding: 0 120px;
  justify-content: center;
  align-items: center;
`;

export const SectionContainer = styled.div<SectionContainerProps>`
  width: 100%;
  margin: 0;
  padding: 80px 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  // Background
  background-color: ${(props) => props.theme.getColor(props.backgroundColor || 'black')};
  ${(props) => (props.imgUrl ? BackgroundImageStyles : '')}

  // Hero section for landing page
  ${(props) => (props.isHeroSection ? HeroSectionStyles : '')}

  // Column formatted section
  ${(props) => (props.hasColumns ? ColumnSectionStyles : '')}
`;
