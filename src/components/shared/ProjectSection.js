import {
  AspectRatio,
  Center,
  SimpleGrid,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import useIntersectionObserver from "@react-hook/intersection-observer";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Button, LinkButton } from "tw-components";
import { ChakraNextImage } from "./Image";

const buildProjects = [
  "codenanshu.in",
  "theperfumeyard.com",
  "google.com",
  "twitter.com",
];

const ProjectOptionButton = ({
  children,
  projectName,
  setActiveProject,
  activeProject,
  ...rest
}) => {
  const size = useBreakpointValue({ base: "sm", md: "md" }, "md");

  return (
    <Button
      borderRadius="md"
      variant="solid"
      colorScheme="blackAlpha"
      bg="#1E1E24"
      borderWidth="1px"
      size={size}
      borderColor={
        projectName === activeProject ? "#0098EE" : "rgba(255, 255, 255, 0.1)"
      }
      _hover={{ borderColor: "#0098EE" }}
      _active={{
        borderColor: projectName === activeProject ? "#0098EE" : undefined,
      }}
      onClick={() => {
        flushSync(() => {
          setActiveProject(projectName);
        });
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const ProjectSelector = () => {
  const [activeProject, setActiveProject] = useState(buildProjects[0]);

  return (
    <>
      <SimpleGrid
        gap={{ base: 2, md: 3 }}
        columns={{ base: 2, md: 4 }}
        justifyContent={{ base: "space-between", md: "center" }}
      >
        <ProjectOptionButton
          setActiveProject={setActiveProject}
          activeProject={activeProject}
          projectName={buildProjects[0]}
        >
          codenanshu
        </ProjectOptionButton>
        <ProjectOptionButton
          setActiveProject={setActiveProject}
          activeProject={activeProject}
          projectName={buildProjects[1]}
        >
          perfumeyard
        </ProjectOptionButton>
        <ProjectOptionButton
          setActiveProject={setActiveProject}
          activeProject={activeProject}
          projectName={buildProjects[2]}
        >
          google
        </ProjectOptionButton>
        <ProjectOptionButton
          setActiveProject={setActiveProject}
          activeProject={activeProject}
          projectName={buildProjects[3]}
        >
          twitter
        </ProjectOptionButton>
      </SimpleGrid>
      <LazyLoadedImage
        aspectRatioProps={{
          ratio: { base: 16 / 9, md: 16 / 9 },
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
        layout="fill"
        loading="lazy"
        src={`/assets/projects/${activeProject}.png`}
        url={activeProject}
      />
    </>
  );
};

export const LazyLoadedImage = ({ url, aspectRatioProps, ...imageProps }) => {
  const containerRef = useRef(null);
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  return (
    <>
    <AspectRatio {...aspectRatioProps} ref={containerRef}>
      {lockRef.current ? (
        <ChakraNextImage {...imageProps} />
      ) : (
        <Center>
          <Spinner color="white" />
        </Center>
      )}
    </AspectRatio>
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
        href={`https://${url}`}
        isExternal
        p={6}
        rightIcon
      >
        Live demonstration
      </LinkButton>
    </>
  );
};
