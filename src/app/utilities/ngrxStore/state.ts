export interface UserList {
  employeeID: string;
  name: string;
  isAuthentication: boolean;
}

//εε§ηΆζ
export const initCount = 0;   //state

export const USERAll: UserList[] = [
]

export interface AppState {
  todos: UserList;
}
