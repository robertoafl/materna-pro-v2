import { HeaderContainer, HeaderTitle } from "./styles";

interface HeaderProps {
  text: string;
}

export function Header({ text }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderTitle>{text}</HeaderTitle>
    </HeaderContainer>
  );
}
