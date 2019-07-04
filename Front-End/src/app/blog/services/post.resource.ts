import { PostListItem } from './../datamodel/post-list-item';
import { ApiConfig } from './../api.config';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostResources {
    private readonly URL = ApiConfig.url + '/posts'
    constructor(private httpClient: HttpClient) { }

    public findAll(): Observable<PostListItem[]> {
        return this.httpClient.get(this.URL) as Observable<PostListItem[]>;
    }
}