export interface IUser {
  id: number,
  fullName: string,
  email: string,
  phone: string,
  birthDay: string,
  address: string,
  createdAt: string,
  updatedAt: string,
  status: boolean,
  isAdmin: boolean,
  expanded?: boolean
}

export interface IAddUser {
  fullName: string,
  email: string,
  phone: string,
  birthDay: string,
  address: string,
  createdAt: string,
  updatedAt: string,
  status: boolean,
  isAdmin: boolean
}