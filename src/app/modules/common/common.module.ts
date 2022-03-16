import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { SvgIconsModule } from "@ngneat/svg-icon";
import { RouterModule } from "@angular/router";
import { TextFieldComponent } from "./form-fields/text-field/text-field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordFieldComponent } from "./form-fields/password-field/password-field.component";
import { AbstractFieldComponent } from "./form-fields/abstract-field/abstract-field.component";

@NgModule({
    declarations: [
        NavigationBarComponent,
        TextFieldComponent,
        PasswordFieldComponent,
        AbstractFieldComponent
    ],
    exports: [
        NavigationBarComponent,
        TextFieldComponent,
        PasswordFieldComponent
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
