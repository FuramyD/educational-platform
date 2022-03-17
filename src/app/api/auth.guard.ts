import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import { RoutePaths } from "./standalone.routes";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.getCurrentProfile().pipe(
            map(() => true),
            catchError(() => {
                this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.LOGIN]);
                return of(false);
            })
        );
        // if (!AuthService.isLoggedIn) {
        //     this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.LOGIN]);
        //     return false;
        // }
        // return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(childRoute, state);
    }

}
