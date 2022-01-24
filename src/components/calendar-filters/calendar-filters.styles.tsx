import styled, { css } from 'styled-components';
import { FilterColorTypes } from '../../type-declarations/styled';

export const FilterOption = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin: 4px 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  color: ${(props) => props.theme.themeColors.textDark};
  font-size: medium;
  font-weight: 300;
`;

// Check Box Props
type CheckBoxProps = {
  color: FilterColorTypes;
  selected?: boolean;
};

const SelectedStyles = css<CheckBoxProps>`
  background-color: ${(props) => props.theme.getColor(props.color)};
  color: ${(props) => props.theme.themeColors.white};
`;

export const CheckBox = styled.a<CheckBoxProps>`
  height: 24px;
  width: 24px;
  margin-right: 20px;
  color: ${(props) => props.theme.themeColors.transparent};
  background-color: ${(props) => props.theme.themeColors.transparent};
  ${(props) => (props.selected ? SelectedStyles : '')};
  border: 2px solid ${(props) => props.theme.getColor(props.color)};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
`;

export const FilterOptionsButton = styled.a`
  position: absolute;
  display: flex;
  width: fit-content;
  height: fit-content;
  top: 2.5px;
  right: 10px;
  color: ${(props) => props.theme.themeColors.textDark};
  :hover {
    color: ${(props) => props.theme.themeColors.primaryAccent};
  }
`;
