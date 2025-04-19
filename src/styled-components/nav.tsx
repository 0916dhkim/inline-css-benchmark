import { Link, useLocation } from "react-router";
import { styled } from "styled-components";

const Container = styled.nav`
  width: 100dvw;
  background: ${({ theme }) => theme.colorBackground};
  position: sticky;
  top: 0;

  & a {
    color: ${({ theme }) => theme.colorText};
    &:hover {
      color: ${({ theme }) => theme.colorPrimary};
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 1rem;
  gap: 1rem;
`;

export function Nav() {
  const { search } = useLocation();
  return (
    <Container>
      <List>
        <li>
          <Link to={{ pathname: "/inline-css", search }}>Inline CSS</Link>
        </li>
        <li>
          <Link to={{ pathname: "/tailwind", search }}>Tailwind CSS</Link>
        </li>
        <li>
          <Link to={{ pathname: "/styled-components", search }}>
            Styled Components
          </Link>
        </li>
      </List>
    </Container>
  );
}
