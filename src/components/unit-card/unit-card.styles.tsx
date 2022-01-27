import styled from 'styled-components';

export const UnitCardContainer = styled.div`
  background-color: ${(props) => props.theme.themeColors.white};
  transition: 0.1s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;

  :hover {
    box-shadow: 0 4px 10px ${(props) => props.theme.themeColors.shadow};
    transform: translateY(-2px);
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
