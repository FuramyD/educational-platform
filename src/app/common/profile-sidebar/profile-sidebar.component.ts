import { Component, Input } from "@angular/core";
import { Course } from "../../models/course.model";

@Component({
    selector: "ep-profile-sidebar",
    templateUrl: "./profile-sidebar.component.html",
    styleUrls: ["./profile-sidebar.component.less"]
})
export class ProfileSidebarComponent {

    @Input() username: string;
    @Input() email: string;
    @Input() courses: (Course & { color: string })[];

}
