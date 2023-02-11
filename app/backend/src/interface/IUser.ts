interface IUserWithoutPassword {
  id: number;
  username: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export interface IToken {
  token?: string;
}

export interface IErros extends IToken{
  status: number;
  error:boolean;
  message?:string;
}

export default IUserWithoutPassword;
