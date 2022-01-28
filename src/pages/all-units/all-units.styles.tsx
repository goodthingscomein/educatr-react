import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow-y: auto;
`;

export const ContentContainer = styled.div`
  flex: 1 0 0;
  padding: 80px 10% 40px;
  overflow-y: scroll;
  scrollbar-width: thin;
`;

// Card Grid Container Props
type CardGridContainerProps = {
  numberOfColumns: number;
  numberOfRows: number;
  cardHeight: string;
};

export const AllUnitsGridContainer = styled.div<CardGridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfColumns}, minmax(0, 1fr));
  grid-template-rows: repeat(${(props) => props.numberOfRows}, minmax(0, 1fr));
  gap: 36px;
`;
