import { createGlobalStyle } from "styled-components";
import Fira_Sans400 from "../../assets/fonts/Fira_Sans/FiraSans-Regular.ttf";
import Fira_Sans500 from "../../assets/fonts/Fira_Sans/FiraSans-Medium.ttf";
import Fira_Sans600 from "../../assets/fonts/Fira_Sans/FiraSans-SemiBold.ttf";

import Work_Sans400 from "../../assets/fonts/Work_Sans/WorkSans-Regular.ttf";
import Work_Sans600 from "../../assets/fonts/Work_Sans/WorkSans-SemiBold.ttf";
import Work_Sans700 from "../../assets/fonts/Work_Sans/WorkSans-Bold.ttf";

import Inter400 from "../../assets/fonts/Inter/Inter-Regular.ttf";
import Inter500 from "../../assets/fonts/Inter/Inter-Medium.ttf";
import Inter600 from "../../assets/fonts/Inter/Inter-SemiBold.ttf";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Fira_Sans400';
        src: local('Fira_Sans400'),
        url(${Fira_Sans400}) format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Fira_Sans500';
        src: local('Fira_Sans500'),
        url(${Fira_Sans500}) format('truetype');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Fira_Sans600';
        src: local('Fira_Sans600'),
        url(${Fira_Sans600}) format('truetype');
        font-weight: 600;
    }
    @font-face {
        font-family: 'Work_Sans400';
        src: local('Work_Sans400'),
        url(${Work_Sans400}) format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Work_Sans600';
        src: local('Work_Sans600'),
        url(${Work_Sans600}) format('truetype');
        font-weight: 600;
    }
    @font-face {
        font-family: 'Work_Sans700';
        src: local('Work_Sans700'),
        url(${Work_Sans700}) format('truetype');
        font-weight: 700;
    }
    @font-face {
        font-family: 'Inter400';
        src: local('Inter400'),
        url(${Inter400}) format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Inter500';
        src: local('Inter500'),
        url(${Inter500}) format('truetype');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Inter600';
        src: local('Inter600'),
        url(${Inter600}) format('truetype');
        font-weight: 600;
    }
`;
