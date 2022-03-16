import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { PROVIDED_SERVICES } from "./services/provided-services";
import { EpHttpInterceptor } from "./http.interseptor";
import { StoreModule } from "@ngrx/store";
import { EpStoreModule, reducers } from "./store/store.module";
import { EffectsModule } from "@ngrx/effects";
import { ViewsModule } from "./views/views.module";
import { EpCommonModule } from "./modules/common/common.module";
import { SvgIconsModule } from "@ngneat/svg-icon";
import { completeIconSet } from "../assets/icons/icons";
import { iconSizes } from "../assets/icons/sizes";
import { AuthModule } from "./modules/login/auth.module";
import { AuthGuard } from "./api/auth.guard";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EpStoreModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot(reducers, {}),
        ViewsModule,
        EpCommonModule,
        AuthModule,
        SvgIconsModule.forRoot({
            icons: completeIconSet,
            sizes: iconSizes
        })
    ],
    providers: [
        ...PROVIDED_SERVICES,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: EpHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
