import styled from 'styled-components';

export const ResourceCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => props.theme.themeColors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 2px 8px ${(props) => props.theme.themeColors.darken};

  overflow: hidden;
  cursor: pointer;
  transition: 0.1s;

  :hover {
    box-shadow: 0 4px 8px ${(props) => props.theme.themeColors.shadow};
    transform: translateY(-2px);
  }
`;

// Unit Card Image Props
type ResourceCardThumbnailProps = {
  src: string;
};

export const Thumbnail = styled.a<ResourceCardThumbnailProps>`
  flex: 0 0 240px;
  width: 100%;
  background: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-color: ${(props) => props.theme.themeColors.textLight};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardTextContainer = styled.div`
  flex: 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
`;
