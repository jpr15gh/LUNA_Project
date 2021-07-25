import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    color: #4C4C4C;
  }

  html,
  body,
  #root {
    height: 100vh;
    width: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    background: #F2F2F2;
  }
`

export const defaultTheme = {
    // Colors:
    orange: "#E47D31",
    backgroundWhite: "#FFFFFF",
    backgroundGrey: "#F8F8F8",
    red: "#B00000",
    black: "#000000",
    nightRider: '#303030',
    whisper: "#EBEBEB",
    mediumGrey: "#BBB7B7",
    mediumGrey60: 'rgb(145, 145, 145, 0.6)',
    grey: "#7E7E7E",
    charcoal: "#4A4A4A",
    dimGrey: "#646363",
    nobel: '#979797',
    lightSilver: '#D8D8D8',
    grey94: '#F0F0F0',
    yellow: '#F8E71C',
    whitesmoke: "#F5F5F5",

    // Sizes
    controlHeight: '40px',
    controlHeightMini: '24px',
    controlHeightSmall: '32px',
    controlHeightLarge: '48px',
    spaceXXS: '4px',
    spaceXS: '8px',
    spaceS: '16px',
    spaceM: '24px',
    spaceL: '32px',
    spaceXL: '48px',
    spaceXXL: '220px',

    // Text Size
    textSizeXXL: '30px',
    textSizeXL: "24px",
    textSizeL: "18px",
    textSizeM: "16px",
    textSizeS: "14px",
    textSizeXS: "12px",

    // Text Weight
    textWeightThin: '300',
    textWeightRegular: '400',
    textWeightMedium: '500',
    textWeightBold: '700'
}
