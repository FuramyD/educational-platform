import { User } from "../../models/user.model";


export class GeneralHelper {

    public static getFullName(user: User): string {
        return `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim();
    }

}
