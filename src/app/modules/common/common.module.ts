import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { IconComponent, ICONS_PATH } from "./icon/icon.component";



@NgModule({
    declarations: [
        NavigationBarComponent,
        IconComponent
    ],
    exports: [
        NavigationBarComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: ICONS_PATH,
            useValue: "assets/icons",
        },
    ]
})
export class EpCommonModule { }
