export enum ESizes {
    smallest,
    smaller,
    small,
    regular,
    large,
    larger,
    largest,
}

export interface ISizes {
    [ESizes.smallest]: string;
    [ESizes.smaller]: string;
    [ESizes.small]: string;
    [ESizes.regular]: string;
    [ESizes.large]: string;
    [ESizes.larger]: string;
    [ESizes.largest]: string;
}
