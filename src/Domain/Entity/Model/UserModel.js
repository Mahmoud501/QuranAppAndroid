export class UserModel {
  constructor(api) {
    this.id = api?.id;
    this.name = api?.name;
    this.email = api?.email;
    this.mobile = api?.mobile;
  }
}
