import styled from 'styled-components';

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
`;

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

export const InputDiscussionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

export const ButtonsContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-self: flex-end;
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
  padding-left: 60px;
  padding-right: 20%;
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
  flex: 0 0 30px;
  height: fit-content;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;
