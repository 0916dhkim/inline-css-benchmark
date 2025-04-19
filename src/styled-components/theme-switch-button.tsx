import styled from "styled-components";
import { useQueryState } from "../use-query-state";
import { useEffect } from "react";

const StyledButton = styled.button`
  font-weight: bold;
  padding: 0.5rem;
  width: 12rem;
  background: ${({ theme }) => theme.colorPrimary};
  border-radius: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colorSecondary};
  }
`;

export function ThemeSwitchButton() {
  const [themeName, setThemeName] = useQueryState("theme");

  useEffect(() => {
    document.documentElement.classList.toggle("light", themeName === "light");
    document.documentElement.classList.toggle("dark", themeName === "dark");
  }, [themeName]);

  const switchTheme = () => {
    switch (themeName) {
      case "light":
        return setThemeName("dark");
      case "dark":
        return setThemeName("");
      default:
        return setThemeName("light");
    }
  };

  return (
    <StyledButton onClick={switchTheme}>
      {themeName === "light" && "Light Theme"}
      {themeName === "dark" && "Dark Theme"}
      {!themeName && "System Theme"}
    </StyledButton>
  );
}
