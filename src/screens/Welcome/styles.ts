import styled from "styled-components/native";

export const WelcomeContainer = styled.View`
  flex: 1;
  padding: 80px 50px;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeHeader = styled.View`
  flex-direction: column;
`;

const TitleStyle = styled.Text`
  color: #7c99af;
`;

export const WelcomeTitle = styled(TitleStyle)`
  font-size: 50px;
  font-weight: bold;
`;

export const WelcomeSubtitle = styled(TitleStyle)`
  font-weight: 30px;
`;

export const WelcomeText = styled.Text`
  font-size: 40px;
  text-align: center;
  color: #64bcce;
`;

export const WelcomeButtons = styled.View`
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;
`;
