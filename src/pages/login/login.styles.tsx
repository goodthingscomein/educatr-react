import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  overflow-x: hidden;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 120px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-content: center;
  gap: 60px;
`;

export const SignUpText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0;
`;
