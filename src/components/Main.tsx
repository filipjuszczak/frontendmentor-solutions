import { StyledMain } from "./styled/Main";

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}
