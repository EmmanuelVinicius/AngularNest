import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../user/datamodel/userLogin';
import { ApiConfig } from 'src/app/blog/api.config';
import { AuthToken } from '../datamodel/auth.token';

@Injectable()
export class AuthResource {

    private readonly URL = ApiConfig + '/auth';
    constructor(private readonly httpClient: HttpClient) { }

    public signInUser(user:UserLogin):Observable<AuthToken> {
        return of({expires_in:16000, token: 'secretToken'})
    }
}