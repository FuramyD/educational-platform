import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { SvgIconsModule } from "@ngneat/svg-icon";
import { RouterModule } from "@angular/router";
import { TextFieldComponent } from "./form-fields/text-field/text-field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordFieldComponent } from "./form-fields/password-field/password-field.component";
import { AbstractFieldComponent } from "./form-fields/abstract-field/abstract-field.component";
import { HeaderComponent } from "./header/header.component";
import { ProfileSidebarComponent } from "../../common/profile-sidebar/profile-sidebar.component";
import { DurationPipe } from "./pipes/duration.pipe";

@NgModule({
    declarations: [
        NavigationBarComponent,
        TextFieldComponent,
        PasswordFieldComponent,
        AbstractFieldComponent,
        HeaderComponent,
        ProfileSidebarComponent,
        DurationPipe
    ],
    exports: [
        NavigationBarComponent,
        TextFieldComponent,
        PasswordFieldComponent,
        HeaderComponent,
        ProfileSidebarComponent,
        DurationPipe
    ],
    imports: [
        CommonModule,
        SvgIconsModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [

    ]
})
export class EpCommonModule { }
