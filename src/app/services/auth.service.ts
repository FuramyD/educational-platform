import { Injectable } from "@angular/core";
import { RestApiRequestOptions } from "../models/rest-api.model";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    public getAuthorizationParams(): RestApiRequestOptions {
        const token = window.sessionStorage.getItem("access_token");
        const headers = new HttpHeaders().append("Authorization", `Bearer ${token}`);
        return { headers };
    }
}
