import { Component, Inject } from "@angular/core";
import { LOCAL_STORAGE, LOCATION } from "../../../../common/tokens/browser.tokens";
import { ACCESS_TOKEN } from "../../../../common/constants/api.constants";

@Component({
    selector: "ep-logout",
    template: ""
})
export class LogoutComponent {

    constructor(
        @Inject(LOCAL_STORAGE) private localStorageRef: Storage,
        @Inject(LOCATION) private locationRef: Location
    ) {
        this.localStorageRef.removeItem(ACCESS_TOKEN);
        this.locationRef.reload();
    }

}
