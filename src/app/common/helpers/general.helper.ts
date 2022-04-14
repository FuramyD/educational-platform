import { User } from "../../models/user.model";

export class GeneralHelper {

    constructor() {}

    public static getQueryParameterFromURL(parameter: string, location: Location): string {
        return decodeURI(location.search).slice(1).split("&")
            .find((parameter: string) => parameter.startsWith(parameter))
            .split("=")[1];
    }

    public static getFullName(user: User): string {
        return `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim();
    }
}
