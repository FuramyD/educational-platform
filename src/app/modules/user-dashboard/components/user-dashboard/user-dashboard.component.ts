import { Component, OnInit } from "@angular/core";
import { Section, SectionColors } from "../../../../models/custom.model";

@Component({
    selector: "ep-user-dashboard",
    templateUrl: "./user-dashboard.component.html",
    styleUrls: ["./user-dashboard.component.less"]
})
export class UserDashboardComponent implements OnInit {

    constructor() { }

    _title: string = "Главная";
    _sections: Section[];

    ngOnInit(): void {
        this._sections = [
            { name: "Section #1", link: "", color: SectionColors.GREEN },
            { name: "Section #2", link: "", color: SectionColors.DIRTY_BLUE },
            { name: "Section #3", link: "", color: SectionColors.LIGHT_GREEN },
            { name: "Section #4", link: "", color: SectionColors.DIRTY_GREEN },
        ];


    }

    _getBackgroundForSections(color: string): string {
        return `${color}33`;
    }

}
