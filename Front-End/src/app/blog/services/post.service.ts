import { PostListItem } from './../datamodel/post-list-item';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostResources } from './post.resource';

@Injectable()
export class PostService {
    constructor(private postResource: PostResources) { }

    public getAllPostItems(): Observable<PostListItem[]> {
        return this.postResource.findAll();
    }
}