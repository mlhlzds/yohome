export class UserInfo {
  id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  phoneBak: String;
  avatar: string;
  avatarPath: String;
  descreption: string;
  token: string;
  address: String;
  userType: string;
  termsOfSale: string;
  welfare: string;
}


export interface LoginInfo {
  access_token: string;
  user: UserInfo;
}
