// 登录接口需要携带的ts类型
export interface loginForm {
  account: string;
  password: string;
  type: string;
}

// 登录接口返回数据类型
export interface loginResponseData {
  code: number;
  message: string;
  data: any;
}

// 获取用户信息返回相关数据类型
interface user {
  username: string;
  email: string;
  phone: string;
  sex: number;
  role: string;
  loginName: string;
  menus: [];
  roles: [];
}

export interface userResponseData {
  code: number;
  message: string;
  data: user;
}
