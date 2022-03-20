import { Component, Input } from "@angular/core";
import { Icon, IconSize } from "src/app/models/icon.model";
import { RoutePaths } from "../../../api/standalone.routes";

type MenuItem = Icon & {
    route: RoutePaths;
    isActive?: boolean;
}

@Component({
    selector: "ep-navigation-bar",
    templateUrl: "./navigation-bar.component.html",
    styleUrls: ["./navigation-bar.component.less"]
})
export class NavigationBarComponent {

    @Input() activeRoute: RoutePaths;

    public _iconDefaultSize: IconSize = "md";
    public _menuItems: MenuItem[] = [
        { icon: "dashboard", route: RoutePaths.USER_DASHBOARD },
        { icon: "book", route: RoutePaths.LEARN },
        { icon: "teacher", route: RoutePaths.TEACHER },
        { icon: "calendar", route: RoutePaths.PLANNING },
        { icon: "messages_2", route: RoutePaths.CHAT }
    ];

    public _footerItems: MenuItem[] = [
        { icon: "setting", route: RoutePaths.SETTINGS },
        { icon: "logout", route: RoutePaths.LOGOUT }
    ];

    constructor() { }
}
