// packages import
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
// component import
import { Header } from "./Header";

export const Layout = () => (
  <Box>
    <Header />

    <Container maxWidth={false} sx={{ maxWidth: "1500px" }}>
      <Outlet />
    </Container>
  </Box>
)