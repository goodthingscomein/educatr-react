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

export const HeaderContainer = styled.div`
  flex: 0 0 160px;
  padding: 0 10%;
  background-color: ${(props) => props.theme.themeColors.white};
  display: flex;
  flex-direction: column-reverse;
  box-shadow: 0 4px 6px ${(props) => props.theme.themeColors.shadow};
  z-index: 1;
`;

export const ContentContainer = styled.div`
  flex: 1 0 0;
  padding: 0 10%;
  overflow-y: scroll;
`;

// Card Grid Container Props
type CardGridContainerProps = {
  numberOfColumns: number;
  numberOfRows: number;
  cardHeight: string;
};

export const SearchUnitsGridContainer = styled.div<CardGridContainerProps>`
  margin-top: 80px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfColumns}, minmax(0, 1fr));
  grid-template-rows: repeat(${(props) => props.numberOfRows}, ${(props) => props.cardHeight});
  gap: 36px;
`;

export const UnitCard = styled.div`
  background-color: ${(props) => props.theme.themeColors.white};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.6);
  transition: 0.1s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;

  :hover {
    transform: scale(1.02);
  }
`;

// Unit Card Image Props
type UnitCardImageProps = {
  src: string;
};

export const UnitCardImage = styled.div<UnitCardImageProps>`
  flex: 0 0 180px;
  width: 100%;
  background: linear-gradient(
      ${(props) => props.theme.themeColors.shadow},
      ${(props) => props.theme.themeColors.shadow}
    ),
    url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-color: ${(props) => props.theme.themeColors.textLight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnitCardTextContainer = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 12px 20px;
  background-color: ${(props) => props.theme.themeColors.white};
`;
