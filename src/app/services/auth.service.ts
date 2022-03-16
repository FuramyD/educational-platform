import { Injectable } from "@angular/core";
import { RestApiRequestOptions } from "../models/rest-api.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginParameters, RegistrationParameters } from "../models/login.model";
import { User } from "../models/user.model";
import { RegistrationResponse } from "../models/response.model";
import { apiRoutes } from "../api/api.routes";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) {}

    public static isLoggedIn: boolean = false;

    public getAuthorizationOptions(): RestApiRequestOptions {
        const token = window.sessionStorage.getItem("access_token");
        const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`);
        return { headers };
    }

    public login(loginParameters: LoginParameters): Observable<User> {
        const url = `${apiRoutes.gateways.publicGateWay}/${apiRoutes.urls["login"]}`;
        return this.http.post<User>(url, loginParameters);
    }

    public registration(registrationParameters: RegistrationParameters): Observable<RegistrationResponse> {
        const url = `${apiRoutes.gateways.publicGateWay}/${apiRoutes.urls["registration"]}`;
        return this.http.post<RegistrationResponse>(url, registrationParameters);
    }
}
