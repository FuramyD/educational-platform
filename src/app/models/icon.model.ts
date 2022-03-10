import { SVG_CONFIG } from "@ngneat/svg-icon/lib/types";
import { myIcons } from "../../assets/icons/icons";

export interface Icon {
    icon: myIcons;
    size?: IconSize;
    color?: string;
}

export enum IconSizes {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl",
    XXL = "xxl"
}

export type IconSize = keyof SVG_CONFIG["sizes"];
