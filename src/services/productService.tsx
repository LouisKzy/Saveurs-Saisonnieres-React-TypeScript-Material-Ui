import axios, { AxiosResponse } from "axios";
import { API_URL_PRODUCTS } from "../constants";
import Cookie from "js-cookie";

interface ProductData {
  name: string;
  price: string;
  description: string;
  origin: string;
  variety: string;
  image: File;
  categorie: string;
  isAdmin: boolean;
}

interface UpdatedProductData extends Omit<ProductData, 'image'> {
  image?: File;
}

export function GetProducts(): Promise<AxiosResponse<any>> {
  return axios.get(API_URL_PRODUCTS);
}

export async function GetProductfetch(productId: number): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(`${API_URL_PRODUCTS}/${productId}`);
    return response.data;
  } catch (error: any) {
    throw new Error("Error fetching product data");
  }
}

export async function AddProductfetch(productData: ProductData): Promise<any> {
  const formData = new FormData();
  formData.append("name", productData.name);
  formData.append("price", productData.price);
  formData.append("description", productData.description);
  formData.append("origin", productData.origin);
  formData.append("variety", productData.variety);
  formData.append("image", productData.image);
  formData.append("categorie", productData.categorie);
  formData.append("isAdmin", productData.isAdmin.toString());

  try {
    const response: AxiosResponse<any> = await axios.post(API_URL_PRODUCTS, formData, {
      params: {
        isAdmin: productData.isAdmin,
      },
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: Cookie.get("token") || '',
      },
    });

    if (response.status === 201) {
      const productId = response.data.id;
      const imageFormData = new FormData();
      imageFormData.append("image", productData.image);

      const imageResponse: AxiosResponse<any> = await axios.post(
        `${API_URL_PRODUCTS}/${productId}/product_images`,
        imageFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: Cookie.get("token") || '',
          },
          params: {
            isAdmin: productData.isAdmin,
          },
        }
      );

      console.log("Réponse de téléchargement d'image:", imageResponse);
      return response;
    } else {
      throw new Error("La création du produit a échoué.");
    }
  } catch (error: any) {
    console.error("Erreur lors de la création du produit:", error);
    throw error;
  }
}

export async function EditProductfetch(productId: number, updatedProductData: UpdatedProductData, isAdmin: boolean): Promise<any> {
  try {
    const formData = new FormData();
    formData.append("name", updatedProductData.name);
    formData.append("price", updatedProductData.price);
    formData.append("description", updatedProductData.description);
    formData.append("origin", updatedProductData.origin);
    formData.append("variety", updatedProductData.variety);

    if (updatedProductData.image) {
      formData.append("image", updatedProductData.image);
    }

    const productResponse: AxiosResponse<any> = await axios.put(
      `${API_URL_PRODUCTS}/${productId}`,
      formData,
      {
        params: {
          isAdmin: isAdmin,
        },
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: Cookie.get("token") || '',
        },
      }
    );

    if (updatedProductData.image) {
      const imageFormData = new FormData();
      imageFormData.append("image", updatedProductData.image);

      const imageResponse: AxiosResponse<any> = await axios.put(
        `${API_URL_PRODUCTS}/${productId}/product_images/${productResponse.data.id}`,
        imageFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: Cookie.get("token") || '',
          },
          params: {
            isAdmin: isAdmin,
          },
        }
      );

      console.log("Image updated successfully:", imageResponse);
      return productResponse;
    } else {
      return productResponse;
    }
  } catch (error: any) {
    console.error("Error editing product:", error);
    throw error;
  }
}

export async function DeleteProductfetch(productId: number, isAdmin: boolean): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.delete(`${API_URL_PRODUCTS}/${productId}`, {
      params: {
        isAdmin: isAdmin,
      },
      headers: {
        Authorization: Cookie.get("token") || '',
      },
    });
    console.log("Produit supprimé avec succès.");
    console.log(response);
    return response;
  } catch (error: any) {
    console.error("Erreur lors de la suppression du produit:", error);
    throw new Error("La suppression du produit a échoué.");
  }
}
