import { Inject, Injectable } from "@angular/core";
import { RestApiRequestOptions } from "../models/rest-api.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, switchMap } from "rxjs";
import { LoginParameters, RegistrationParameters } from "../models/login.model";
import {
    AuthorizationResponse,
    ProfileResponse,
    RegistrationResponse
} from "../models/response.model";
import { RestApiService } from "./rest-api.service";
import { LOCAL_STORAGE } from "../common/tokens/browser.tokens";
import { ACCESS_TOKEN } from "../common/constants/api.constants";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    constructor(
        @Inject(LOCAL_STORAGE) private localStorageRef: Storage,
        private http: HttpClient,
        private restApiService: RestApiService
    ) {}

    public getAuthorizationOptions(): RestApiRequestOptions {
        const token = this.localStorageRef.getItem(ACCESS_TOKEN);
        const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`);
        return { headers };
    }

    public getCurrentProfile(): Observable<ProfileResponse> {
        return this.restApiService.get<ProfileResponse>("profile", {
            request: this.getAuthorizationOptions()
        });
    }

    public login(loginParameters: LoginParameters): Observable<ProfileResponse> {
        // const url = `${apiRoutes.gateways.publicGateWay}/${apiRoutes.urls["login"]}`;
        // return this.http.post<AuthorizationResponse>(url, loginParameters).pipe(
        //     switchMap((response: AuthorizationResponse) => {
        //         this.localStorageRef.setItem(ACCESS_TOKEN, response.accessToken);
        //         return this.getCurrentProfile();
        //     })
        // );

        return this.restApiService.post<AuthorizationResponse>("login", loginParameters).pipe(
            switchMap((response: AuthorizationResponse) => {
                this.localStorageRef.setItem(ACCESS_TOKEN, response.accessToken);
                return this.getCurrentProfile();
            })
        );
    }

    public registration(registrationParameters: RegistrationParameters): Observable<RegistrationResponse> {
        // const url = `${apiRoutes.gateways.publicGateWay}/${apiRoutes.urls["registration"]}`;
        // return this.http.post<RegistrationResponse>(url, registrationParameters);
        return this.restApiService.post<RegistrationResponse>("registration", registrationParameters);
    }

    public restorePassword(email: string): Observable<boolean> {
        return this.restApiService.post<boolean>("restorePassword", { email });
    }

    public changePassword(id: string, password: string): Observable<boolean> {
        return this.restApiService.post<boolean>("changePassword", { id, password });
    }
}
