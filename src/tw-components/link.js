import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import _NextLink, { LinkProps as _NextLinkProps } from "next/link";
import React, { useCallback } from "react";

/**
 * A link component that can be used to navigate to other pages.
 * Combines the `NextLink` and Chakra `Link` components.
 */
export const Link = React.forwardRef((props, ref) => {
  const { href, isExternal, children, ...restLinkProps } = props;
  if (isExternal) {
    return (
      <ChakraLink isExternal href={href} ref={ref} {...restLinkProps}>
        {children}
      </ChakraLink>
    );
  }

  return (
    <_NextLink href={href} passHref>
      <ChakraLink ref={ref} _focus={{ boxShadow: "none" }} {...restLinkProps}>
        {children}
      </ChakraLink>
    </_NextLink>
  );
});

Link.displayName = "Link";
export const NextLink = Link;
