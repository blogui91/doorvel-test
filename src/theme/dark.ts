import {
  mauveDark,
  violetDark,
  redDark,
  orangeDark,
  greenDark,
  blue,
} from "@radix-ui/colors";

const dark = {
  common: {
    black: mauveDark.mauve1,
    white: mauveDark.mauve12,
  },
  primary: {
    main: blue.blue1,
  },
  error: {
    main: redDark.red9,
  },
  warning: {
    main: orangeDark.orange9,
  },
  success: {
    main: greenDark.green9,
  },
  divider: mauveDark.mauve6,

  background: {
    default: mauveDark.mauve1,
    paper: mauveDark.mauve1,
    subtle: mauveDark.mauve2,
  },
  componentBackground: {
    default: mauveDark.mauve3,
    hover: mauveDark.mauve4,
    active: mauveDark.mauve5,
  },
  border: {
    disable: mauveDark.mauve6,
    default: mauveDark.mauve7,
    hover: mauveDark.mauve8,
  },
  solidBackground: {
    default: violetDark.violet9,
    hover: violetDark.violet10,
  },
  text: {
    primary: mauveDark.mauve12,
    secondary: mauveDark.mauve11,
    disabled: mauveDark.mauve10,
  },
};

export default dark;
