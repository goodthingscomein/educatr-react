import styled from 'styled-components';

export const VerticalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DiscussionSubPageContainer = styled.div`
  width: 100%;
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
`;

export const AddNewDiscussionContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const DisplayPhotoContainer = styled.div`
  flex: 0 0 50px;
  height: fit-content;
  margin-right: 24px;
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  flex: 1 0 0;
  margin-top: 6px;
  height: 100%;
`;

export const InputButtonsContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
`;

export const CancelCommentButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllExistingDiscussionsContainer = styled.div`
  width: 100%;
  padding: 0 60px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
