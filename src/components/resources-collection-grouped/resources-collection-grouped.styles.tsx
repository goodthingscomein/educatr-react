import styled from 'styled-components';

// Card Grid Container Props
type CardGridContainerProps = {
  numberOfColumns: number;
  numberOfRows: number;
};

export const ResourceCardGridContainer = styled.div<CardGridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfColumns}, minmax(0, 1fr));
  grid-template-rows: repeat(${(props) => props.numberOfRows}, 310px);
  gap: 36px;
`;
