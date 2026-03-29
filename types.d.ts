interface User {
  id: string;
  email: string;
  firstName: string;
  secondName: string;
  phoneNumber: string | null;
  verified: boolean;
  googleId: string | null;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
  signUpMode: SignupMode | null;
  accessToken: string;
}
