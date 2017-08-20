export class UserInfo {
  id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  phoneBak:String;
  avatar: string;
  avatarPath:String;
  description: string;
  token: string;
  address:String;
}


export interface LoginInfo {
  access_token: string;
  user: UserInfo;
}
