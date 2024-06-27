import axios, { AxiosResponse } from "axios";
import { API_URL_CART, API_URL } from "../constants";
import Cookie from "js-cookie";

export async function GetCart(): Promise<AxiosResponse<any>> {
  try {
    const token = Cookie.get("token") || '';
    const response: AxiosResponse<any> = await axios.get(API_URL_CART, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });

    console.log('Cart:', response);
    return response;
  } catch (error: any) {
    console.error('Error fetching cart:', error);
    throw error;
  }
}

export async function AddProductToCart(productId: number): Promise<any> {
  try {
    const token = Cookie.get("token") || '';
    const response: AxiosResponse<any> = await axios.post(`${API_URL}/cart_products`, {
      productId: productId 
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });

    console.log('Product added to cart:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
}

export async function RemoveFromCart(productId: number): Promise<any> {
  try {
    const token = Cookie.get("token") || '';
    const response: AxiosResponse<any> = await axios.delete(
      `${API_URL}/cart_products/${productId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      params: {
        productId: productId
      }
    });

    console.log('Product removed from cart:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error removing product from cart:', error);
    throw error;
  }
}
