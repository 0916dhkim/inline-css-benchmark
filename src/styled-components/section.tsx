import { styled } from "styled-components";

const Heading = styled.h1`
  color: ${({ theme }) => theme.colorPrimary};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 3rem);
  grid-auto-rows: 3rem;
  width: fit-content;

  border: 4px solid ${({ theme }) => theme.colorSecondary};

  & .cell {
    color: ${({ theme }) => theme.colorAccent};
    text-decoration: line-through;
  }
`;

type Props = {
  children?: React.ReactNode;
};

export function Section(props: Props) {
  return (
    <section>
      <Heading>Section</Heading>
      <Container>{props.children}</Container>
    </section>
  );
}
