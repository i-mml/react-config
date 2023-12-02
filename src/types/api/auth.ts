import { string } from "yup";

export interface LoginResponseType {
  error_message: string;
  token: {
    access_token: string;
    refresh_token: string;
    user_id: string;
    issued_at: string;
    expired_access_token: string;
    expired_refresh_token: string;
    role_id: number;
  };
  user: {
    user_id: string;
    mobile: string;
    national_code: string;
    email: string;
    is_active: boolean;
    login: boolean;
    password: string;
    phone_registered: boolean;
    role: number;
    last_seen: string;
    first_name: string;
    last_name: string;
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
  };
}

export interface LoginFields {
  number: string;
  password: string;
}
