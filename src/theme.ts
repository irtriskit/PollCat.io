import { ESizes, ISizes } from './models/Sizes';
import { DefaultTheme } from 'styled-components';

const baseSizes: ISizes = {
    [ESizes.smallest]: '4px',
    [ESizes.smaller]: '8px',
    [ESizes.small]: '12px',
    [ESizes.regular]: '16px',
    [ESizes.large]: '20px',
    [ESizes.larger]: '24px',
    [ESizes.largest]: '28px',
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            siteTitle: string;
            primary: string;
            secondary: string;
            tertiary: string;
            accent: string;
            pollBackground: string;
            pollText: string;
            resultBackground: string;
        };

        padding: ISizes;

        font: {
            family: string;
            sizes: ISizes;
        };

        breakpoints: {
            [key: string]: string;
        };

        zIndex: {
            background: number;
            default: 0;
            low: number;
            medium: number;
            high: number;
        };
    }
}

export const baseTheme: DefaultTheme = {
    colors: {
        siteTitle: '#a9b7cd',
        primary: '#17223b',
        secondary: '#263859',
        tertiary: '#a9b7cd',
        accent: '#ff6768',
        pollBackground: '#263859',
        pollText: '#a9b7cd',
        resultBackground: '#a9b7cd',
    },

    padding: {
        ...baseSizes,
    },

    font: {
        family: `Roboto, sans-serif`,
        sizes: baseSizes,
    },

    breakpoints: {
        large: '1200px',
    },

    zIndex: {
        background: -1,
        default: 0,
        low: 10,
        medium: 100,
        high: 1000,
    },
};

export const strawTheme: DefaultTheme = {
    colors: {
        siteTitle: '#ca302c',
        primary: '#333333',
        secondary: '#222222',
        tertiary: '#eaeaea',
        accent: '#ca302c',
        pollBackground: '#ffd756',
        pollText: '#222222',
        resultBackground: '#ffd756',
    },

    padding: {
        ...baseSizes,
    },

    font: {
        family: `Roboto, sans-serif`,
        sizes: baseSizes,
    },

    breakpoints: {
        large: '1200px',
    },

    zIndex: {
        background: -1,
        default: 0,
        low: 10,
        medium: 100,
        high: 1000,
    },
};
