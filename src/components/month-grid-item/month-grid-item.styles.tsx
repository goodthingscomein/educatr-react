import styled, { css } from 'styled-components';

// Grid Item Props
type GridItemProps = {
  isToday?: boolean;
};

const IsTodayStyles = css`
  background-color: ${(props) => props.theme.themeColors.primaryAccent}40;
`;

export const GridItemContainer = styled.div<GridItemProps>`
  padding: 4px;
  border: 1px solid ${(props) => props.theme.themeColors.borderColor};
  ${(props) => (props.isToday ? IsTodayStyles : '')};
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow-y: hidden;
`;

export const LabelTextContainer = styled.div`
  width: 100;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EventGridContainer = styled.div`
  margin-top: 4px;
  height: 100%;
  width: 100%;
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  min-height: 0;
  min-width: 0;
  overflow: hidden;
`;
