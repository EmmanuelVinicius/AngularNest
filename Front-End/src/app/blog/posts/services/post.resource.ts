import { CreatePostDto } from '../../../../../../Back-End/src/blog/dto/create.post.dto';
import { PostDto } from '../../datamodel/post-dto';
import { EditPostDto } from '../../datamodel/edit-post.dto';
import { ApiConfig } from '../../api.config';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostResources {
    private readonly URL = ApiConfig.url + '/posts'
    constructor(private httpClient: HttpClient) { }

    public findAll(): Observable<PostDto[]> {
        return this.httpClient.get(this.URL) as Observable<PostDto[]>;
    }

    public create(createPostDto: CreatePostDto): Observable<CreatePostDto>{
        return this.httpClient.post(this.URL, createPostDto) as Observable<CreatePostDto>;
    }

    public edit(editPostDto: EditPostDto): Observable<EditPostDto> {
        return this.httpClient.put(this.URL, editPostDto) as Observable<EditPostDto>;
    }

    public delete(postId: number): Observable<any>{
        return this.httpClient.delete(this.URL + '/' + postId)
    }
}