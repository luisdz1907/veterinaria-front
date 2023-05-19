export interface ResponseLoginUser {
    access_token: string;
    token_type:   string;
    expires_in:   number;
    user:         User;
}

export interface User {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    profile_picture?:   string;
    activated:         number;
    created_at:        Date;
    updated_at:        Date;
}
