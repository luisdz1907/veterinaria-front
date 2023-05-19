export interface ResponseCreateUser {
    message: string;
    user:    User;
}

export interface User {
    name:       string;
    email:      string;
    updated_at: Date;
    created_at: Date;
    id:         number;
}
