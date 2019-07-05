import { AuthService } from './../../common/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class BlogGuard implements CanActivate {

    constructor(private readonly router: Router, private readonly authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
        const isAuthorized = this.authService.isAuthorized();
        if(!isAuthorized){
            this.router.navigate(['login'])
        }
        return of(isAuthorized)
    }
}