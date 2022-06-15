import { Box } from "@chakra-ui/react";
import { createContext, useContext } from "react";

const defaultBoxProps = {
  shadow: "sm",
  px: 4,
  py: 4,
  borderRadius: "xl",
  borderWidth: "1px",
  borderColor: "borderColor",
};

const CardStackContext = createContext(0);

const cardStackBgMap = {
  0: "backgroundHighlight",
  1: "backgroundCardHighlight",
  2: "backgroundHighlight",
  3: "backgroundCardHighlight",
};

export const Card = ({ children, ...requiredBoxProps }) => {
  const cardStackLevel = useContext(CardStackContext);
  return (
    <CardStackContext.Provider value={cardStackLevel + 1}>
      <Box
        backgroundColor={
          cardStackBgMap[cardStackLevel] || "backgroundHighlight"
        }
        {...{ ...defaultBoxProps, ...requiredBoxProps }}
      >
        {children}
      </Box>
    </CardStackContext.Provider>
  );
};
