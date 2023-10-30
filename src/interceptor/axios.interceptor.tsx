import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { getValidationError } from "../utilities/get-validation-error";
import { SnackbarUtilities } from "../utilities/snackbar-manager";

export const AxiosInterceptor = () => {
    //Clasicas: mandar autenticacions 
    //poque una funcion? Traten de separar la logica, 
    const updateHeader = (request: AxiosRequestConfig) => {
        const token = "2qjkqlwejkwje";
        const newHeaders = {
          Authorization: token,
          'Content-Type': 'application/json'
        };
        request.headers = newHeaders;
        return request;
      };
    axios.interceptors.request.use((request: any) => {
        if(request.url?.includes('upload')) return request;
        
        return updateHeader(request)
    })
    axios.interceptors.response.use(
      (response) => {
        console.log(response)
        return response;
      },
      (error) => {
        console.log(getValidationError(error.code))
        SnackbarUtilities.error(getValidationError(error.code))
        return Promise.reject(error)
      }
    )
}