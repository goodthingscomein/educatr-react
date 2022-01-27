import styled from 'styled-components';

// Card Grid Container Props
type CardGridContainerProps = {
  numberOfColumns: number;
  numberOfRows: number;
  cardHeight: string;
};

export const SearchUnitsGridContainer = styled.div<CardGridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfColumns}, minmax(0, 1fr));
  grid-template-rows: repeat(${(props) => props.numberOfRows}, ${(props) => props.cardHeight});
  gap: 36px;
`;

export const VideoCard = styled.div`
  transition: 0.1s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

// Unit Card Image Props
type VideoCardThumbnailProps = {
  src: string;
};

export const ThumbnailHoverButton = styled.div`
  display: none;
  height: fit-content;
  width: fit-content;
  font-size: 260%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.themeColors.white};
`;

export const ThumbnailTimestamp = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  height: fit-content;
  width: fit-content;
  padding: 0 6px;
  color: ${(props) => props.theme.themeColors.white};
  font-size: small;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Thumbnail = styled.a<VideoCardThumbnailProps>`
  flex: 0 0 75%;
  width: 100%;
  background: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-color: ${(props) => props.theme.themeColors.textLight};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${(props) => props.src});
    background-position: center;
    background-size: cover;
  }

  &:hover ${ThumbnailHoverButton} {
    display: flex;
  }
`;

export const VideoCardTextContainer = styled.div`
  flex: 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 12px;
`;
