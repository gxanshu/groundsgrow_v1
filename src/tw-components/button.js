import { Card } from "./card";
import { Text } from "./text";
import { convertFontSizeToCSSvar } from "./utils/typography";
import {
  Button as ChakraButton,
  Icon,
  IconButton,
  LightMode,
  Link,
  Tooltip,
  forwardRef,
  useButtonGroup,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiCopy, FiExternalLink } from "react-icons/fi";
import { fontWeights, lineHeights, letterSpacings } from "theme/typography";

export const buttonSizesMap = {
  xs: "sm",
  sm: "md",
  md: "lg",
  lg: "xl",
};

export const Button = forwardRef(({ size, ...restButtonProps }, ref) => {
  const { size: groupSize, ...butotnGroupContext } = useButtonGroup() || {};
  let _size = size || groupSize || "md";
  if (!(_size in buttonSizesMap)) {
    _size = "md";
  }

  const props = {
    fontWeight: fontWeights.label,
    fontHeight: lineHeights.label,
    letterSpacings: letterSpacings.label,
    fontSize: convertFontSizeToCSSvar(`label.${buttonSizesMap[size]}`),
    size: _size,
    ...butotnGroupContext,
    ...restButtonProps,
  };

  if (props.colorScheme && props.variant !== "outline") {
    return (
      <LightMode>
        <ChakraButton
          fontWeight={fontWeights.label}
          lineHeight={lineHeights.label}
          letterSpacing={letterSpacings.label}
          {...props}
          ref={ref}
        />
      </LightMode>
    );
  }
  return <ChakraButton {...props} ref={ref} />;
});

Button.displayName = "Button";

export const LinkButton = forwardRef(
  ({ href, isExterneal, noIcon, children, ...restButtonProps }, ref) => {
    if (isExterneal) {
      return (
        <Button
          as={Link}
          href={href}
          isExternal
          ref={ref}
          textDecoration="none!important"
          rightIcon={noIcon ? undefined : <Icon as={FiExternalLink} />}
          {...restButtonProps}
        >
          {children}
        </Button>
      );
    }

    return (
      <NextLink href={href} passHref>
        <Button
          as={Link}
          ref={ref}
          {...restButtonProps}
          textDecoration="none!important"
        >
          {children}
        </Button>
      </NextLink>
    );
  },
);

LinkButton.displayName = "LinkButton";

export const CustomIconButton = forwardRef(
  ({ category, label, ...restButtonProps }, ref) => {
    return <IconButton ref={ref} {...restButtonProps} />;
  },
);

CustomIconButton.displayName = "CustomIconButton";
