export interface Section {
    id?: string;
    name: string;
    link: string;
    color: SectionColors;
}

export enum SectionColors {
    GREEN = "#008A0E",
    DIRTY_BLUE = "#01636C",
    LIGHT_GREEN = "#6AA500",
    DIRTY_GREEN = "#005A0B",
}
