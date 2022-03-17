export interface RegistrationResponse {
    message: string;
}

export interface AuthorizationResponse extends ErrorResponse {
    accessToken?: string;
}

export interface ProfileResponse extends ErrorResponse {
    id?: string;
}


export interface ErrorResponse {
    message?: string;
}
