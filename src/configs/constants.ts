export enum Screens {
  SIGN_IN = 'SignIn',
  SIGN_UP = 'SignUp',
  MAIN = 'BottomNavigation',
  COMPANY = 'Company',
  STORE = 'Store',
  IDEAS = 'Ideas',
}

export enum Routes {
  SIGN_IN = 'http://localhost:3000/api/api-auth/signIn',
  SIGN_OUT = 'http://localhost:3000/api/api-auth/signOut',
  SIGN_UP = 'http://localhost:3000/api/api-auth/signUp',
  REFRESH_SESSION = 'http://localhost:3000/api/api-auth/refresh',
  RESET_PASSWORD = 'http://localhost:3000/api/api-auth/resetPassword',
  CREATE_COMPANY = 'http://localhost:3000/api/company',
}

export enum UserRoles {
  USER = 'USER',
}

export enum Countries {
  USA = 'USA',
  Ukraine = 'Ukraine',
}
