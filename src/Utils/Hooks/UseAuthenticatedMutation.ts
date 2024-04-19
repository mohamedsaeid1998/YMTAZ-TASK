"use client"
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios"


interface IAuthenticatedMutation {
  mutationKey: string[],
  url: string,
  config?: AxiosRequestConfig
}
export const UseAuthenticatedMutation = ({ mutationKey, url, config }: IAuthenticatedMutation) => {
  return useMutation({
    mutationKey,
    mutationFn: async (data: any) => {
      const response = await axios.post(url, data, config);
      return response.data;
    }
  })
}