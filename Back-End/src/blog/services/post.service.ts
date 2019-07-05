import { EditPostDto } from './../dto/edit.post.dto';
import { PostEntity } from './../post/post.entity';
import { CreatePostDto } from '../dto/create.post.dto';
import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostDto } from '../dto/post.dto';
import _ = require('lodash');

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>){}
    public findAll(): Observable<PostEntity[]>{
        return from(this.postRepository.find())
        .pipe(
            map((posts) => _.orderBy(posts, ['id'], ['asc']))
        )
    }

    public create(createPostDto: CreatePostDto): Promise<PostDto> {
        return this.postRepository.save(createPostDto);
    }

    public edit(editPostDto: EditPostDto): Promise<PostDto> {
        return this.postRepository.save(editPostDto);
    }

    public delete(postId: number): void{
        this.postRepository.delete(postId);
    }
}