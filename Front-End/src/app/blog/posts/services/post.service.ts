import { CreatePostDto } from '../../../../../../Back-End/src/blog/dto/create.post.dto';
import { PostDto } from '../../datamodel/post-dto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostResources } from './post.resource';

@Injectable()
export class PostService {
    constructor(private postResource: PostResources) { }

    public getAllPostItems(): Observable<PostDto[]> {
        return this.postResource.findAll();
    }

    public createPost(createPostDto: CreatePostDto): Observable<CreatePostDto>{
        return this.postResource.create(createPostDto)
    }
}