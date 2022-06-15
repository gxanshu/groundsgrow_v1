import { convertFontSizeToCSSvar } from "./utils/typography";
import {Text as ChakraText} from '@chakra-ui/react'
import {
    lineHeights,
    fontWeights,
    letterSpacings
} from 'theme/typography'

export const Text = ({size = 'body.md', ...restProps}) => {
    const [base] = size.split('.');
    return (
        <ChakraText
            fontSize={convertFontSizeToCSSvar(size)}
            fontWeight={fontWeights[base]}
            lineHeight={lineHeights[base]}
            letterSpacing={letterSpacings[base]}
            {...restProps}
        />
    )
}