import { Injectable } from '@angular/core';
import { UserLogin } from '../../user/datamodel/userLogin';
import { Observable } from 'rxjs';
import { AuthResource } from './auth.resource';
import { AuthToken } from '../datamodel/auth.token';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class AuthService {

    private readonly AUTH_STORAGE_KEY = 'auth token'
    constructor(private resource: AuthResource, private router: Router) { }

    public signIn(user: UserLogin): Observable<void> {
        return this.resource.signInUser(user)
            .pipe(
                map((authToken) => {
                    this.storeToken(authToken);
                    return;
                })
            );
    }

    public logOut() {
        this.clearToken();
        this.router.navigate(['login'])
    }

    public isAuthorized(): boolean {
        return !_.isEmpty(this.loadToken())
    }

    private clearToken() {
        localStorage.removeItem(this.AUTH_STORAGE_KEY);
    }

    private storeToken(token: AuthToken) {
        localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(token))
    }
    private loadToken(): AuthToken {
        try {
            return JSON.parse(localStorage.getItem(this.AUTH_STORAGE_KEY));
        } catch {
            console.error('BAD JSON FORMAT');
        }
    }
}
