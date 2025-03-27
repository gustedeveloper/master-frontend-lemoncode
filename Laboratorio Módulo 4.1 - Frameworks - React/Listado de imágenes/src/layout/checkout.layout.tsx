import { Container } from "@mui/material";
import { FC } from "react";

interface Props {
  children: [React.ReactNode, React.ReactNode];
}

export const CheckoutLayout: FC<Props> = ({ children }) => (
  <Container
    sx={{
      display: "flex",
      justifyContent: "space-around",

      mt: "100px",
      gap: "50px",
    }}
  >
    {children}
  </Container>
);
