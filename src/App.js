import { ThemeProvider, createGlobalStyle } from "styled-components";

import logo from "./logo.svg";

import "./App.css";
import "./styles.css";

import StyledButton, { FancyButton, SubmitButton, AnimatedLogo, DarkButton } from "./components/Button/Button";

const theme = {
    dark: {
        primary: "#000",
        text: "#fff",
    },
    light: {
        primary: "#fff",
        text: "#000",
    },
    fontFamily: "Segoe UI",
};

const GlobalStyle = createGlobalStyle`
    button{
        font-family:${(props) => props.theme.fontFamily}
    }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div className="App">
                <AnimatedLogo src={logo} />
                <StyledButton>Styled Button</StyledButton>
                <div>
                    <br />
                </div>
                <StyledButton variant="outline">Styled Button</StyledButton>
                <div>
                    <br />
                </div>
                <FancyButton as="a">Styled Button</FancyButton>
                <div>
                    <br />
                </div>
                <SubmitButton>Submit Button</SubmitButton>
                <div>
                    <br />
                    <DarkButton>Dark Theme </DarkButton>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
