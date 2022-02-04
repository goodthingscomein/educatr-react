import styled from 'styled-components';

export const SubPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
`;

export const ResourceContainer = styled.div`
  width: auto;
  height: fit-content;
  margin-bottom: 12px;
  padding: 12px 24px;
  border: 1px solid ${(props) => props.theme.themeColors.borderColor};
  display: flex;
  flex-direction: column;
`;

export const ResourceHeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
`;

export const ResourceHeaderDetailsContainer = styled.div`
  flex: 1 0 0;
  padding-right: 24px;
  display: flex;
`;

// Text to display when hovering over the resource img card
export const ViewResourceText = styled.div`
  color: ${(props) => props.theme.themeColors.white};
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
`;

// Resource Display Card Props
type ResourceDisplayCardProps = {
  imgSrc: string;
};

export const ResourceDisplayCard = styled.a<ResourceDisplayCardProps>`
  flex: 0 0 200px;
  height: 140px;
  margin-right: 24px;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.themeColors.textLight};
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${(props) => props.imgSrc});
  background-position: center;
  cursor: pointer;
  transition: 0.2s;

  :hover &ViewResourceText {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${(props) => props.imgSrc});
  }
`;
