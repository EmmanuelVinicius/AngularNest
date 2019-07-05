import { EditPostDto } from './../../../../../../Back-End/src/blog/dto/edit.post.dto';
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

    public editPost(editPostDto: EditPostDto): Observable<PostDto>{
        return this.postResource.edit(editPostDto);
    }

    public deletePost(postId: number): Observable<void>{
        return this.postResource.delete(postId)
    }
}