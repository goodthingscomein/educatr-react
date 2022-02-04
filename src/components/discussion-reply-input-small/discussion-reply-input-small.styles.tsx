import styled from 'styled-components';

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const VerticalContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 8px;
  flex-direction: column;
`;

export const DiscussionSubPageContainer = styled.div`
  width: 100%;
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
`;

export const InputDiscussionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
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
  height: 100%;
`;

export const ButtonsContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-self: flex-end;
`;

export const InputButtonsContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const ExistingDiscussionContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const HeadDiscussionContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const SmallDisplayPhotoContainer = styled.div`
  flex: 0 0 38px;
  height: fit-content;
  margin-right: 24px;
  display: flex;
  align-items: center;
`;

export const AllRepliesContainer = styled.div`
  width: 100%;
  margin-top: 12px;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CommentUserDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const SmallerDisplayPhotoContainer = styled.div`
  flex: 0 0 32px;
  height: fit-content;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;
