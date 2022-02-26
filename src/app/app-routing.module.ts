import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { standaloneRoutes } from "./api/standalone.routes";

@NgModule({
    imports: [RouterModule.forRoot(standaloneRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
