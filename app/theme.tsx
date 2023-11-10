import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  colors: {
    brand: {
      lightGray: '#FAFBFC',
      gray: '#EDF2F7',
      bgGray: '#F4F7FE',
      darkGray: '#CBD5E0',
      blue: '#422AFB',
      white: '#FFFFFF',
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: 'brand.blue',
            borderColor: 'brand.blue',
          },
        },
      },
    },
  },
});

export default theme;
