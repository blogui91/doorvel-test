import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import useAppTheme from "@/hooks/useAppTheme";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = () => {
  const { toggleColorMode, mode }  = useAppTheme();

  return (
      <Grid
        p={3}
        display="flex"
        alignItems="center"
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
      >
        <Typography component="h1" fontSize={20} fontWeight="bolder" ml={2}>
          <Link href="/">
            <Stack direction="row" gap={1} alignItems="center" spacing={2}>
              <Image
                src="/favicon.png"
                width={20}
                height={20}
                alt="Doorvel test"
              />{" "}
              Doorvel Test
            </Stack>
          </Link>
        </Typography>

        <Button variant="text" color="secondary" onClick={toggleColorMode}>
           { mode === 'light' ? (
             <Brightness7Icon />
             ): (
              <Brightness4Icon />
           )}
        </Button>
      </Grid>
  );
};

export default Header;
