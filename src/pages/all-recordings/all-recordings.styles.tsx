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
