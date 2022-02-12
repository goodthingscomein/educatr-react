import styled from 'styled-components';

// Card Grid Props
type CardGridProps = {
  numberOfColumns: number;
  numberOfRows: number;
};

export const CardGrid = styled.div<CardGridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfColumns}, minmax(0, 1fr));
  grid-template-rows: repeat(${(props) => props.numberOfRows}, minmax(0, 1fr));
  gap: 36px;
`;
