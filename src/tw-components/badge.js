import { text } from "./text";
import { Badge as ChakraBadge, LightMode, forwardRef } from "@chakra-ui/react";

export const Badge = forwardRef(
  ({ py = 1, children, size = "label.md", ...props }, ref) => {
    if (props.colorScheme && props.variant && props.variant === "outline") {
      return (
        <LightMode>
          <ChakraBadge py={py} {...props} ref={ref}>
            <Text color="inherit" size={size}>
              {children}
            </Text>
          </ChakraBadge>
        </LightMode>
      );
    }

    return (
      <ChakraBadge py={py} {...props} ref={ref}>
        <Text color="inherit" size={size}>
          {children}
        </Text>
      </ChakraBadge>
    );
  },
);

Badge.displayName = "Badge";
