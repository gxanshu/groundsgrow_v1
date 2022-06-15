import { convertFontSizeToCSSVar } from "./utils/typography";
import {
  Heading as ChakraHeading,
} from "@chakra-ui/react";
import {
  fontWeights,
  letterSpacings,
  lineHeights,
} from "theme/typography";

export const Heading = ({
  size = "title.lg",
  ...restProps
}) => {
  const [base] = size.split(".");

  return (
    <ChakraHeading
      fontSize={convertFontSizeToCSSVar(size)}
      fontWeight={fontWeights[base]}
      lineHeight={lineHeights[base]}
      letterSpacing={letterSpacings[base]}
      {...restProps}
    />
  );
};
