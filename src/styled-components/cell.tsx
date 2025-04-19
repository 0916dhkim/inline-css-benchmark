import styled from "styled-components";

const Container = styled.div`
  border: 1px dashed ${({ theme }) => theme.colorSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
type Props = {
  children?: React.ReactNode;
};

export function Cell(props: Props) {
  return <Container className="cell">{props.children}</Container>;
}
