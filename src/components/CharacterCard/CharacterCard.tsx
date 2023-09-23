import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Button,
} from "@mui/material";
import Link from "next/link";
import CircleIcon from '@mui/icons-material/Circle';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { CharacterProps } from "./types";

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 250 }}
        image={character.image}
        title={character.name}
      />
      <CardContent>
        <Stack gap={1}>
          <Typography variant="h6" noWrap fontWeight={600}>
            {character.name} {' - '} {character.species}
          </Typography>
          <Stack flexDirection="row" alignItems="center" gap={1}>
            {character.status === 'Alive' && <CircleIcon  color="success" fontSize="small" />}
            {character.status === 'Dead' && <CircleIcon  color="error" fontSize="small" />}
            {character.status === 'unknown' && <CircleIcon  color="action" fontSize="small" />}
            <Typography variant="body1" color="text.secondary" fontSize="0.9rem" textTransform="capitalize">
              {character.status}
            </Typography>
          </Stack>

          <Stack flexDirection="row" alignItems="center" gap={1}>
            <PublicIcon fontSize="small" />
            <Typography variant="body1" noWrap color="text.secondary"  fontSize="0.9rem">
              From {character.origin.name}
            </Typography>
          </Stack>

          <Stack flexDirection="row" alignItems="center" gap={1}>
            <LocationCityIcon fontSize="small" />
            <Typography variant="body1" noWrap color="text.secondary"  fontSize="0.9rem">
              Lives in {character.location.name}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          justifyContent="flex-end"
          width="100%"
          spacing={2}
        >
          <Button variant="contained" LinkComponent={Link} href={`/characters/${character.id}`}>
            View Details
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
