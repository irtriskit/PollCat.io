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
            primary: string;
            secondary: string;
            tertiary: string;
            accent: string;
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
        primary: '#17223b',
        secondary: '#263859',
        tertiary: '#a9b7cd',
        accent: '#ff6768',
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
