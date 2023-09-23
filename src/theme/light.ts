import { green, mauve, orange, red, violet } from "@radix-ui/colors";

const light = {
  common: {
    black: mauve.mauve12,
    white: mauve.mauve1,
  },
  primary: {
    main: violet.violet9,
  },
  error: {
    main: red.red9,
  },
  warning: {
    main: orange.orange9,
  },
  success: {
    main: green.green9,
  },
  divider: mauve.mauve6,

  background: {
    default: mauve.mauve1,
    paper: mauve.mauve1,
    subtle: mauve.mauve2,
  },
  componentBackground: {
    default: mauve.mauve3,
    hover: mauve.mauve4,
    active: mauve.mauve5,
  },
  border: {
    disable: mauve.mauve6,
    default: mauve.mauve7,
    hover: mauve.mauve8,
  },
  solidBackground: {
    default: violet.violet9,
    hover: violet.violet10,
  },
  text: {
    primary: mauve.mauve12,
    secondary: mauve.mauve11,
    disabled: mauve.mauve10,
  },
};

export default light;
