import { IAddUser } from "../interface/user";
import axiosClient from "./axiosClient";

const userApi = {
  getAll(params: any) {
    const url = "/users";
    return axiosClient.get(url, { params: params });
  },

  getById(id: number) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  create(data: IAddUser) {
    const url = "/users";
    return axiosClient.post(url, data);
  },

  delete(id: number) {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
};

export default userApi;
