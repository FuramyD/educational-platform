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
import { apiRoutes } from "../api/api.routes";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    constructor(
        @Inject(LOCAL_STORAGE) private localStorageRef: Storage,
        private http: HttpClient,
        private restApiService: RestApiService
    ) {}

    private static getUrl(name: string): string {
        return `${apiRoutes.gateways.publicGateWay}/${apiRoutes.urls[name]}`;
    }

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
        return this.http.post<AuthorizationResponse>(AuthService.getUrl("login"), loginParameters).pipe(
            switchMap((response: AuthorizationResponse) => {
                this.localStorageRef.setItem(ACCESS_TOKEN, response.accessToken);
                return this.getCurrentProfile();
            })
        );
    }

    public registration(registrationParameters: RegistrationParameters): Observable<RegistrationResponse> {
        return this.http.post<RegistrationResponse>(AuthService.getUrl("registration"), registrationParameters);
    }

    public restorePassword(email: string): Observable<boolean> {
        return this.restApiService.post<boolean>("restorePassword", { email });
    }

    public changePassword(id: string, password: string): Observable<boolean> {
        return this.restApiService.post<boolean>("changePassword", { id, password });
    }
}
