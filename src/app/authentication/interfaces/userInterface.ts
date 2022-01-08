export interface IUser {
    name: string;
    email: string;
    pass: string;
    isDeleted?: boolean;
    dateOfCreated?: Date;
    dateUpdated?: Date;
}

export interface IUserResponse {
    message: string;
    ok: boolean;
}