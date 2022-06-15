import { SimpleGrid, Flex, LightMode } from "@chakra-ui/react";
import { HomepageSection } from "components/HomeSection";
import { GeneralCta } from "components/shared/GeneralCta";
import { Heading, Link, Text } from 'tw-components'
import { ChakraNextImage } from "components/shared/Image";
import Hero from '../../public/landingpage/hero.png';
import MobileHero from '../../public/landingpage/mobile-hero.png'

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
              Build web3 apps, easily.
            </Heading>
            <Heading
              as="h3"
              size="subtitle.md"
              textAlign={{ base: "center", md: "left" }}
            >
              Smart contracts you control. Powerful SDKs and intuitive tools for
              developers. Ship on-chain faster.
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
                  <Text size="body.lg">thirdweb is 100% free</Text>
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
    </>
  );
}
