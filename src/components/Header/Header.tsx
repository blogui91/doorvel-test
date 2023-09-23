import { Button, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useToggleTheme from "@/hooks/useToggleTheme";

const Header = () => {
  const { toggleColorMode, mode }  = useToggleTheme();

  return (
      <Grid
        p={3}
        display="flex"
        alignItems="center"
        flexDirection="row"
        position="fixed"
        top={0}
        zIndex={1000}
        color={mode == 'light' ? 'primary.contrastText' : 'secondary.contrastText'}
        bgcolor={mode == 'light' ? 'primary.main' : 'secondary.main'}
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
             <Brightness7Icon sx={{ color: '#fff' }} />
             ): (
              <Brightness4Icon sx={{ color: '#fff'}} />
           )}
        </Button>
      </Grid>
  );
};

export default Header;
