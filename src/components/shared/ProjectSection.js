import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  Spinner,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import useIntersectionObserver from "@react-hook/intersection-observer";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  Button,
  LinkButton,
} from "tw-components";

const isReplitEnabled = true;

const SiteOptionButton = ({
  children,
  domain,
  setActiveDomain,
  activeDomain,
  ...rest
}) => {
  const size = useBreakpointValue(
    { base: "sm", md: "md" },
    "md",
  )

  return (
    <Button
      borderRadius="md"
      variant="solid"
      colorScheme="blackAlpha"
      bg="#1E1E24"
      borderWidth="1px"
      size={size}
      borderColor="#0098EE"
      _hover={{ borderColor: "#0098EE" }}
      _active={{
        borderColor: "#0098EE"
      }}
      {...rest}
      onClick={() => {
        flushSync(() => {
          setActiveDomain(domain);
        });
      }}
    >
      {children}
    </Button>
  );
};

export const CodeSelector = () => {
  const [activeDomain, setActiveDomain] =
    useState("codenanshu.in");
  return (
    <>
      <SimpleGrid
        gap={{ base: 2, md: 3 }}
        columns={{ base: 2, md: 4 }}
        justifyContent={{ base: "space-between", md: "center" }}
      >
        <SiteOptionButton
          setActiveDomain={setActiveDomain}
          activeDomain={activeDomain}
          domain="google.com"
        >
          codenanshu
        </SiteOptionButton>
        <SiteOptionButton
          setActiveDomain={setActiveDomain}
          activeDomain={activeDomain}
          domain="theperfumeyard.com"
        >
          perfumeyard
        </SiteOptionButton>
        <SiteOptionButton
          setActiveDomain={setActiveDomain}
          activeDomain={activeDomain}
          domain="google.com"
        >
          Google
        </SiteOptionButton>
        <SiteOptionButton
          setActiveDomain={setActiveDomain}
          activeDomain={activeDomain}
          domain="instagram.com"
        >
          instagram
        </SiteOptionButton>
      </SimpleGrid>
      {isReplitEnabled ? (
        <LazyLoadedIframe
          aspectRatioProps={{
            ratio: { base: 9 / 16, md: 16 / 9 },
            w: "full",
            borderRadius: "xl",
            overflow: "hidden",
            border: "2px solid",
            borderColor: "#4953AF",
            bg: "#1C2333",
          }}
          frameBorder="0"
          width="1200px"
          height="800px"
          loading="lazy"
          src={`https://${activeDomain}`}
        />
      ) : (
        <Flex
          gap={{ base: 4, md: 12 }}
          align="center"
          direction={{ base: "column", md: "row" }}
          w="100%"
          maxW="container.sm"
        >
          <LinkButton
            role="group"
            borderRadius="md"
            p={6}
            variant="gradient"
            fromcolor="#1D64EF"
            tocolor="#E0507A"
            // flexShrink={0}
            isExternal
            // variant="solid"
            colorScheme="primary"
            w="full"
            // maxW="300px"
            href={`https://codenanshu.in`}
            leftIcon={
              <Icon
                color="#1D64EF"
                _groupHover={{ color: "#E0507A" }}
                as={SiReplit}
              />
            }
          >
            <Box as="span">Try it on repl.it</Box>
          </LinkButton>
        </Flex>
      )}
      <LinkButton
        variant="outline"
        borderRadius="md"
        bg="#fff"
        color="#000"
        w="full"
        maxW="container.sm"
        _hover={{
          bg: "whiteAlpha.800",
        }}
        href="https://portal.thirdweb.com/"
        isExternal
        p={6}
      >
        Explore documentation
      </LinkButton>
    </>
  );
};

const ChakraIframe = chakra("iframe");

export const LazyLoadedIframe = ({
  aspectRatioProps,
  ...iframeProps
}) => {
  const containerRef = useRef(null);
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <AspectRatio {...aspectRatioProps} ref={containerRef}>
      {lockRef.current ? (
        <ChakraIframe {...iframeProps} />
      ) : (
        <Center>
          <Spinner color="heading" />
        </Center>
      )}
    </AspectRatio>
  );
};
