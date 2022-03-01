import { Component, Inject, Input, InjectionToken } from "@angular/core";

export const ICONS_PATH = new InjectionToken<string>("Pass to the icons folder");

@Component({
    selector: "ep-icon[icon]",
    template: "<svg:use [attr.href]=\"href\">svg icon</svg:use>",
    styleUrls: ["./icon.component.less"]
})
export class IconComponent {

    @Input() icon: string = "";

    constructor(@Inject(ICONS_PATH) private readonly path: string) { }

    get href(): string {
        return `${this.path}/${this.icon}.svg`;
    }

}
