export class NewUser {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    age: number,
    gender: string,
    mobile: string,
    address: string,
    city: string,
    state: string,
    country: string,
    pincode: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.mobile = mobile;
    this.address = address;
    this.city = city;
    this.state = state;
    this.country = country;
    this.pincode = pincode;
  }
}
