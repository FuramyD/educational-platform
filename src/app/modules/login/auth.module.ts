import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./components/auth/auth.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { SvgIconsModule } from "@ngneat/svg-icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EpCommonModule } from "../common/common.module";
import { LoginComponent } from "./components/login/login.component";
import { AppRoutingModule } from "../../app-routing.module";


@NgModule({
    declarations: [
        AuthComponent,
        RegistrationComponent,
        LoginComponent
    ],
    exports: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        SvgIconsModule,
        FormsModule,
        ReactiveFormsModule,
        EpCommonModule,
        AppRoutingModule
    ]
})
export class AuthModule { }
