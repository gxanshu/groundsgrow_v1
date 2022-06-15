import { convertFontSizeToCSSvar } from "./utils/typography";
import {
  MenuGroup as ChakraMenuGroup,
  MenuItem as ChakraMenuItem,
  forwardRef,
  useButtonGroup,
} from "@chakra-ui/react";

import { fontWeights, letterSpacings, lineHeights } from "theme/typography";
import { buttonSizesMap } from "./button";

export const MenuGroup = ({ size = "label.lg", title, ...restProps }) => {
  const [base] = size.split(".");

  return (
    <ChakraMenuGroup
      fontSize={convertFontSizeToCSSvar(size)}
      fontWeight={fontWeights[base]}
      lineHeight={lineHeights[base]}
      letterSpacing={letterSpacings[base]}
      // trick chakra, this works fine
      title={title}
      {...restProps}
    />
  );
};

export const MenuItem = forwardRef(({ size, ...restButtonprops }, ref) => {
  const { size: groupSize, ...buttonGroupContext } = useButtonGroup() || {};
  let _size = size || groupSize || "md";
  if (!(_size in buttonSizesMap)) {
    _size = "md";
  }

  const props = {
    fontWeight: fontWeights.subtitle,
    lineHeight: lineHeights.label,
    letterSpacing: letterSpacings.body,
    fontSize: convertFontSizeToCSSvar(`label.${_size}`),
    size: _size,
    ...buttonGroupContext,
    ...restButtonprops,
  };

  return <ChakraMenuItem {...props} ref={ref} />;
});

MenuItem.displayName = "MenuItem";
