import { convertFontSizeToCSSvar } from "./utils/typography";
import {Text as ChakraText} from '@chakra-ui/react'

export const Text = ({size = 'body.md', ...restProps}) => {
    return (
        <ChakraText
            fontSize={convertFontSizeToCSSvar(size)}
            fontWeight={400}
            lineHeight={1.6}
            letterSpacing={}
        />
    )
}