import { SimpleGrid, Flex, LightMode, Stack } from "@chakra-ui/react";
import { HomepageSection } from "components/HomeSection";
import { GeneralCta } from "components/shared/GeneralCta";
import { Heading, Link, Text } from "tw-components";
import { ChakraNextImage } from "components/shared/Image";
import Hero from "../../public/landingpage/hero.png";
import MobileHero from "../../public/landingpage/mobile-hero.png";
import { ContractCard } from "components/shared/ContractCard";

export default function Home() {
  return (
    <>
      <HomepageSection id="home" topGradient bottomPattern>
        <SimpleGrid
          pt={{
            base: 24,
            md: 48,
          }}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 6, md: 8 }}
        >
          <Flex
            flexDir="column"
            gap={{ base: 6, md: 8 }}
            align={{ base: "initial", md: "start" }}
          >
            <Heading
              as="h2"
              size="display.md"
              textAlign={{ base: "center", md: "left" }}
            >
              Grow business from ground.
            </Heading>
            <Heading
              as="h3"
              size="subtitle.md"
              textAlign={{ base: "center", md: "left" }}
            >
              Groundsgrow porvides you services that grow your business from the
              ground to top lavel on internet.
            </Heading>
            <LightMode>
              <Flex flexDir="column" align="center" gap={6}>
                <GeneralCta size="lg" />
                <Link
                  href="#fees"
                  borderBottomWidth="1px"
                  _hover={{
                    textDecor: "none",
                    opacity: 1,
                  }}
                  opacity={0.8}
                >
                  <Text size="body.lg">with new technology</Text>
                </Link>
              </Flex>
            </LightMode>
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            justifyContent="flex-end"
          >
            <ChakraNextImage
              alt=""
              maxW={96}
              w={96}
              mt={8}
              src={Hero}
              mr={12}
            />
          </Flex>
          <Flex display={{ base: "flex", md: "none" }} justifyContent="center">
            <ChakraNextImage
              alt=""
              maxW={96}
              w={96}
              mt={8}
              px={4}
              src={MobileHero}
            />
          </Flex>
        </SimpleGrid>
      </HomepageSection>

      <HomepageSection id="contracts" middleGradient>
        <Flex
          flexDir="column"
          gap={{ base: 6, md: 8 }}
          py={{ base: 12, lg: 24 }}
          pt={{ base: 24, lg: 0 }}
          align="center"
        >
          <Flex
            p={{ base: 0, md: 12 }}
            pt={{ base: 0, md: 24 }}
            flexDir="column"
            gap={{ base: 6, md: 8 }}
          >
            <Heading textAlign="center" size="display.sm" as="h2">
              <Heading
                as="h2"
                bgGradient="linear(to-r, #B8EEFF, #8689E3)"
                bgClip="text"
                size="display.sm"
                _hover={{ opacity: 0.8 }}
              >
                Why We ?
              </Heading>
            </Heading>
            <Heading size="subtitle.md" as="p" textAlign="center">
              We offer services and strategy that grows authority within your
              business niche
            </Heading>
            <SimpleGrid
              flexDir="column"
              justifyContent="space-between"
              w="100%"
              columns={{ base: 1, md: 3 }}
              gap={{ base: 12, md: 6 }}
              py={12}
              px={{ base: 6, md: 0 }}
            >
              <Stack spacing={4}>
                <ChakraNextImage
                  src={require("/public/landingpage/keys.svg")}
                  placeholder="empty"
                  alt=""
                  w={12}
                />
                <Heading size="title.sm">Consulting</Heading>
                <Text size="body.lg">
                  We provide the IT training and support needed to power your
                  workforce, suggesting an IT strategy that perfectly fits into
                  your business.
                </Text>
              </Stack>

              <Stack spacing={4}>
                <ChakraNextImage
                  src={require("/public/landingpage/extensions.svg")}
                  placeholder="empty"
                  alt=""
                  w={12}
                />
                <Heading size="title.sm">Marketing</Heading>
                <Text size="body.lg">
                  We porvide the best Marketing tools and services to market your product or services online with social media and in other ways also.
                </Text>
              </Stack>

              <Stack spacing={4}>
                <ChakraNextImage
                  src={require("/public/landingpage/list.svg")}
                  placeholder="empty"
                  alt=""
                  w={12}
                />
                <Heading size="title.sm">Development</Heading>
                <Text size="body.lg">
                  We build your fully featured product with latest technologies which provides reliability and scalability at the same time to the end user. 
                </Text>
              </Stack>
            </SimpleGrid>

            <Heading size="subtitle.lg" as="h3" textAlign="center">
              some of our services
            </Heading>
            <SimpleGrid
              columns={{ base: 2, md: 3, lg: 4 }}
              spacing={{ base: 3, md: 4 }}
            >
              <ContractCard
                icon="nft-drop"
                title="Web development"
                description="ERC721 and ERC1155, minted or lazy minted so your audience can claim them."
              />
              <ContractCard
                icon="token"
                title="S.E.O"
                description="ERC20 tokens, minted or lazy minted so your audience can claim them."
              />
              <ContractCard
                icon="marketplace"
                title="App development"
                description="NFT marketplace, either open to any collection or limited to the collections you want."
              />
              <ContractCard
                icon="split"
                title="More"
                description="Governance on-chain, splitting revenue, and more."
              />
            </SimpleGrid>
          </Flex>
        </Flex>
      </HomepageSection>

      {/* section for some related projects */}
    </>
  );
}
