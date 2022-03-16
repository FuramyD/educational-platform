import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { RoutePaths } from "./standalone.routes";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!AuthService.isLoggedIn) {
            this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.LOGIN]);
            return false;
        }
        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute, state);
    }

}
