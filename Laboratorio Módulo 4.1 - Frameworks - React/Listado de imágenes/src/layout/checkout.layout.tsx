import { Container } from "@mui/material";
import { FC } from "react";

interface Props {
  children: [React.ReactNode, React.ReactNode];
}

export const CheckoutLayout: FC<Props> = ({ children }) => (
  <Container
    sx={{
      display: "flex",
      justifyContent: "center",
      margin: {
        xs: "200px 0px",
        md: "50px",
      },
      gap: "50px",
    }}
  >
    {children}
  </Container>
);
