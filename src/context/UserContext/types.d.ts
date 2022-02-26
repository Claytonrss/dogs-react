export interface UserInterface {
  id: number;
  nome: string;
  username: string;
  email: string;
}
export interface UserContextInterface {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => void;
  user: UserInterface | null;
  error: string | null;
  loading: boolean | null;
  login: boolean | null;
}
