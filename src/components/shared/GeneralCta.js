import { Box, Icon } from "@chakra-ui/react";
import { BsLightningCharge } from "react-icons/bs";
import { LinkButton } from "tw-components";

export const GeneralCta = ({
  size = "md",
  title = "Start building",
  ...props
}) => {

  return (
    <LinkButton
      role="group"
      leftIcon={
        <Icon
          as={BsLightningCharge}
          color="#1D64EF"
          _groupHover={{ color: "#E0507A" }}
        />
      }
      color="black"
      px={20}
      py={{ base: 6, md: 8 }}
      textAlign="center"
      variant="gradient"
      fromcolor="#1D64EF"
      tocolor="#E0507A"
      size={size}
      borderRadius="md"
      href="#"
      bgColor="white"
      _hover={{
        borderColor: 'blue.700'
      }}
      {...props}
    >
      <Box as="span" py={0.5}>
        {title}
      </Box>
    </LinkButton>
  );
};
