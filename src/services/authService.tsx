import { API_URL_USERS } from "../constants";
import axios, { AxiosResponse } from "axios";


interface RegisterResponse {
  user: {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    admin: boolean | null;
  };
  message: string;
}
interface User {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  admin: boolean | null;
}

interface LoginResponseData {
  user: User;
  message: string;
}

interface LoginAxiosResponse {
  data: LoginResponseData;
  headers: {
    authorization: string;
    [key: string]: string;
  };
}

async function RegisterFetch(email: string, password: string): Promise<RegisterResponse> {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(API_URL_USERS, {
      user: {
        email: email,
        password: password,
      },
    });

    const data = response.data;

    return data;
  } catch (error: any) {
    throw new Error('Failed to register: ' + error.message);
  }
}

async function LoginFetch(email: string, password: string): Promise<LoginAxiosResponse> {
  try {
    const response: LoginAxiosResponse = await axios.post(`${API_URL_USERS}/sign_in`, {
      user: {
        email: email,
        password: password,
      },
    });
    console.log(response);
    return response;
  } catch (error: any) {
    throw new Error('Failed to login: ' + error.message);
  }
}

async function LogoutFetch(): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.delete(`${API_URL_USERS}/sign_out`);
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to log out: ' + error.message);
  }
}

async function EditPasswordFetch(password: string, confirmPassword: string, resetPasswordToken: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.patch(`${API_URL_USERS}/password`, {
      user: {
        reset_password_token: resetPasswordToken,
        password: password,
        password_confirmation: confirmPassword,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to edit password: ' + error.message);
  }
}

async function ResetPasswordFetch(email: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.post(`${API_URL_USERS}/password`, {
      user: {
        email: email,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to reset password: ' + error.message);
  }
}

export {
  RegisterFetch,
  LoginFetch,
  LogoutFetch,
  EditPasswordFetch,
  ResetPasswordFetch,
};
