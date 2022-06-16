import {
  CommunityRewards,
  CreatorTools,
  DAOs,
  DefiProtocols,
  Marketplaces,
  NFTDrops,
  PlayToEarnGames,
  TokenGated,
} from "./example-svgs";
import { Flex, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Heading } from "tw-components";

const EXAMPLES_MAP = {
  nftDrops: {
    title: "Wev Development",
    href: "https://github.com/thirdweb-example/custom-minting-page",
    svg: NFTDrops,
  },
  marketplaces: {
    title: "S.E.O",
    href: "https://github.com/thirdweb-example/marketplace-next-ts",
    svg: Marketplaces,
  },
  tokenGated: {
    title: "Digital Marketing",
    href: "https://github.com/thirdweb-example/NFT-Gated-Website",
    svg: TokenGated,
  },
  daos: {
    title: "App Development",
    href: "https://github.com/thirdweb-example/dao",
    svg: DAOs,
  },
  creatorTools: {
    title: "software devlopment",
    href: "https://portal.thirdweb.com/examples",
    svg: CreatorTools,
  },
  communityRewards: {
    title: "ecommerce solutions",
    href: "https://github.com/thirdweb-example/community-rewards",
    svg: CommunityRewards,
  },
  playToEarnGames: {
    title: "MERN stack",
    href: "https://portal.thirdweb.com/examples",
    svg: PlayToEarnGames,
  },
  defiProtocols: {
    title: "cloud computing",
    href: "https://portal.thirdweb.com/examples",
    svg: DefiProtocols,
  },
};

export const exampleCategories = Object.keys(EXAMPLES_MAP);
export const ExampleItem = ({ category }) => {
  const { title, href, svg: RenderSVG } = EXAMPLES_MAP[category];
  return (
    <Flex as={LinkBox} role="group" flexDir="column" gap={6} flexGrow={0}>
      <RenderSVG />
      <LinkOverlay href={href} isExternal>
        <Heading
          _groupHover={{ textDecor: "underline" }}
          textAlign="center"
          size="subtitle.md"
          maxW="100%"
        >
          {title}
        </Heading>
      </LinkOverlay>
    </Flex>
  );
};
