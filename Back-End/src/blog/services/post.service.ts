import { Injectable } from '@nestjs/common';
import { PostModel } from '../models/post.model';
import { Observable, of } from 'rxjs';
import { PostsMock } from '../moch/posts.moch';

@Injectable()
export class PostService {
    public findAll(): Observable<PostModel[]>{
        return of(PostsMock)
    }
}