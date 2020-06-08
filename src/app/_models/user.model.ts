export class User {
  name: string;
  surname: string;
  email: string;
  role: string;
  token: string;

  constructor(name: string, surname: string, email: string, role: string, token?: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.token = token;
  }
}
