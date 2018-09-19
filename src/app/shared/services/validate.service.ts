import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  validateRegister(user) {
    if (user.name == '' || user.username == '' || user.email == '' || user.contact_no == '' || user.age == '' ||
      user.gender == '' || user.password == '') {
      return false;
    }
    else {
      return true;
    }
  }
 
  validatePassword(password) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return passw.test(password);
  }
}


