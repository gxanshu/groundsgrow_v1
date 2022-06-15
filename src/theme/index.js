import { extendTheme } from "@chakra-ui/react";
import { getColor, mode } from "@chakra-ui/theme-tools";
import { fontWeights, letterSpacings, lineHeights } from "./typography";

const chkaraTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    Heading:
      "GT Walsheim, Helvetica Neue, Helvetica, ubuntu, Arial, sans-serif",
    body: "GT Walsheim, Helvetica Neue, Helvetica, ubuntu, Arial, sans-serif",
    mono: `'IBM Plex Mono', monospace`,
  },
  styles: {
    global: {
      "html, body": {
        background: "#000",
        padding: 0,
        margin: 0,
        fontFeatureSettings: `'zero' 1`,
        scrollBehavior: "smooth",
      },
      body: {
        colorScheme: "dark",
      },
      "::selection": {
        backgroundColor: "rgb(41, 41, 216)",
        color: "#fff",
      },
      "::-moz-selection": {
        backgroundColor: "rgb(41, 41, 216)",
        color: "#fff",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "heading",
      },
    },
    Text: {
      baseStyle: {
        color: "paragraph",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "md",
      },
      variants: {
        gradient: (props) => {
          const { theme, fromcolor, tocolor } = props;
          const lgFrom = getColor(theme, fromColor);
          const lgTo = getColor(theme, tocolor);
          const bgColor = getColor(theme, mode("white", "gray.800"));

          return {
            border: "3px solid",
            borderColor: "transparent",
            borderRadius: "md",
            background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, 
                        linear-gradient(135deg, ${lgFrom}, ${lgTo}) border-box`,
            "> *": {
              background: `linear-gradient(135deg, ${lgFrom}, ${lgTo})`,
              backgroundClip: "text",
              textFillColor: "transparent",
            },
            _hover: {
              background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, 
                          linear-gradient(315deg, ${lgFrom}, ${lgTo}) border-box`,
              "> *": {
                background: `linear-gradient(315deg, ${lgFrom}, ${lgTo})`,
                backgroundClip: "text",
              },
              opacity: 0.9,
            },
          };
        },
      },
    },
    Modal: {
      baseStyle: {
        overlay: {
          backdropFilter: "blur(5px)",
        },
        dialog: {
          background: "backgroundHighlight",
        },
      },
    },
    Drawer: {
      baseStyle: {
        overlay: {
          backdropFilter: "blur(5px)",
        },
        dialog: {
          background: "backgroundHighlight",
        },
      },
    },
    Select: {
      defaultProps: {
        variant: "filled",
      },
      variants: {
        filled: {
          field: {
            borderWidth: "1px",
            borderColor: "inputBorder",
            background: "inputBg",
            _hover: {
              background: "inputBgHover",
              borderColor: "blue.500",
            },
          },
        },
      },
    },
    Input: {
      defaultProps: {
        variant: "filled",
      },
      variants: {
        filled: {
          field: {
            borderWidth: "1px",
            borderColor: "inputBorder",
            background: "inputBg",
            _hover: {
              background: "inputBgHover",
              borderColor: "blue.500",
            },
          },
        },
      },
      sizes: {
        xl: {
          field: {
            fontSize: "lg",
            px: 4,
            h: 14,
            borderRadius: "md",
          },
          addon: {
            fontSize: "lg",
            px: 4,
            h: 14,
            borderRadius: "md",
          },
        },
      },
    },
    Textarea: {
      defaultProps: {
        variant: "filled",
      },
      variants: {
        filled: {
          borderWidth: "1px",
          borderColor: "inputBorder",
          background: "inputBg",
          _hover: {
            background: "inputBgHover",
            borderColor: "blue.500",
          },
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          bg: "backgroundHighlight",
          py: 0,
        },
        item: {
          py: 2,
        },
      },
    },
    Table: {
      baseStyle: {
        cell: {
          borderColor: "borderColor",
        },
      },
    },
  },
  fontWeights,
  lineHeights,
  letterSpacings,
  sizes: {
    container: {
      page: "1170px",
    },
  },
  semanticTokens: {
    colors: {
      // inputs
      inputBg: { default: "gray.50", _dark: "whiteAlpha.50" },
      inputBgHover: { default: "gray.100", _dark: "whiteAlpha.100" },
      inputBorder: { default: "gray.200", _dark: "transparent" },
      // other
      bgBlack: { default: "black", _dark: "white" },
      bgWhite: { default: "white", _dark: "black" },
      backgroundBody: { default: "backgroundLight", _dark: "backgroundDark" },
      backgroundHighlight: { default: "white", _dark: "#1B2129" },
      backgroundCardHighlight: { default: "white", _dark: "#0F1318" },
      wordmark: { default: "#262A36", _dark: "whiteAlpha.900" },
      heading: { default: "#262A36", _dark: "whiteAlpha.900" },
      paragraph: { default: "rgba(39, 46, 54, 0.9)", _dark: "gray.500" },
      headingLight: { default: "#F2FBFF", _dark: "#262A36" },
      paragraphLight: {
        default: "rgba(242, 251, 255, 0.8)",
        _dark: "rgba(39, 46, 54, 0.9)",
      },
      borderColor: { default: "gray.200", _dark: "whiteAlpha.100" },
    },
  },
});

export default chkaraTheme;