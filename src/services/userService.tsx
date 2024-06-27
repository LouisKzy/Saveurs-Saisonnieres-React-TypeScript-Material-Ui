import axios, { AxiosResponse } from "axios";
import { API_URL_USERS } from "../constants";
import Cookie from "js-cookie";

interface UserData {
  name: string;
  email: string;
}

async function ShowUser(): Promise<UserData> {
  try {
    const response: AxiosResponse<UserData> = await axios.get(API_URL_USERS + `/show/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookie.get("token") || '',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      "Échec de la récupération de l'utilisateur : " + error.message
    );
  }
}

async function UpdateUser(userId: number, userData: UserData): Promise<UserData> {
  try {
    const response: AxiosResponse<UserData> = await axios.patch(API_URL_USERS + `${userId}`, {
      user: userData,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      "Échec de la mise à jour de l'utilisateur : " + error.message
    );
  }
}

async function DeleteUser(userId: number): Promise<AxiosResponse<any>> {
  try {
    const response: AxiosResponse<any> = await axios.delete(API_URL_USERS + `/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookie.get("token") || '',
      },
    });
    return response;
  } catch (error: any) {
    throw new Error(
      "Échec de la suppression de l'utilisateur : " + error.message
    );
  }
}

export { ShowUser, UpdateUser, DeleteUser };
