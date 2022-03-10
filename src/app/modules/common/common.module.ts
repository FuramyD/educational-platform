import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { SvgIconsModule } from "@ngneat/svg-icon";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        NavigationBarComponent
    ],
    exports: [
        NavigationBarComponent
    ],
    imports: [
        CommonModule,
        SvgIconsModule,
        RouterModule
    ]
})
export class EpCommonModule { }
