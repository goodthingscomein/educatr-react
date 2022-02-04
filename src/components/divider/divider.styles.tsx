import styled from 'styled-components';

// Divider Container Props
type DividerContainerProps = {
  color: 'light' | 'dark';
  margin?: string;
};

export const DividerContainer = styled.hr<DividerContainerProps>`
  border: 1px solid
    ${(props) => (props.color === 'light' ? props.theme.themeColors.lighten : props.theme.themeColors.darken)};
  min-width: 100%;
  margin: ${(props) => props.margin || '8px 0'};
`;
