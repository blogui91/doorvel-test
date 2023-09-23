import { Paper } from "@mui/material";

import { Header, Footer } from "@/components";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <Paper
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      {children}
      <Footer />
    </Paper>
  );
};

export default AppLayout;
