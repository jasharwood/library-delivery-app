import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'BlissLight';
        src: url(BlissLight.ttf);
    }

    @font-face {
        font-family: 'Open Sans', sans-serif;
        src: url(OpenSans.ttf);
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background: ${({theme}) => theme.colors.bg3};
    }
`
export default GlobalStyles;