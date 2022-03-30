import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "ep-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {

    @Input() username: string = "unknown user";

    constructor() { }

    ngOnInit(): void {
    }

}
