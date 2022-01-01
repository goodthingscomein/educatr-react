import styled, {css} from 'styled-components';

// Heading props
interface HeadingProps {
  color: 'primary' | 'textDark' | 'textLight' | 'accent' | 'white' | 'black';
}

// All heading styles
const HeadingStyles = css`
  display: flex;
  align-items: centre;
  justify-content: centre;
  margin: 0;
  padding: 0;
`;

// H1
export const H1 = styled.h1<HeadingProps>`
  ${HeadingStyles}
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: 300%;
  font-weight: 200;
`;

// H2
export const H2 = styled.h2<HeadingProps>`
  ${HeadingStyles}
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: 220%;
  font-weight: 300;
`;

// H3
export const H3 = styled.h3<HeadingProps>`
  ${HeadingStyles}
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: 160%;
  font-weight: 300;
`;

// H4
export const H4 = styled.h4<HeadingProps>`
  ${HeadingStyles}
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: 120%;
  font-weight: 700;
`;

// H5
export const H5 = styled.h5<HeadingProps>`
  ${HeadingStyles}
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: 120%;
  font-weight: 400;
`;

// H6
export const H6 = styled.h6<HeadingProps>`
  ${HeadingStyles}
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: 100%;
  font-weight: 700;
`;
