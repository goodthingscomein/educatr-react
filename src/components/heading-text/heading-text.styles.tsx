import styled, { css } from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// Heading props
interface HeadingProps {
  color: ColorTypes;
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
  font-size: 280%;
  font-weight: 600;
  line-height: 100%;
  margin-bottom: 16px;
`;

// H2
export const H2 = styled.h2<HeadingProps>`
  ${HeadingStyles}
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: 200%;
  font-weight: 400;
  margin-bottom: 20px;
`;

// H3
export const H3 = styled.h3<HeadingProps>`
  ${HeadingStyles}
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: 160%;
  font-weight: 400;
  margin-bottom: 12px;
`;

// H4
export const H4 = styled.h4<HeadingProps>`
  ${HeadingStyles}
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: 120%;
  font-weight: 600;
  margin: 4px 0;
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
  font-weight: 600;
`;
