import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServices } from '../shared/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authservice: AuthServices, private router: Router) {
    }

    canActivate() {
        if (this.authservice.loggedIn()) {
            console.log()
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}

