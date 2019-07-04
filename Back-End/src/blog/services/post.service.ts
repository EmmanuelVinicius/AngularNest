import { PostEntity } from './../post/post.entity';
import { CreatePostDto } from './../dto/post.dto';
import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>){}
    public findAll(): Observable<PostEntity[]>{
        return from(this.postRepository.find());
    }
    public create(createPostDto: CreatePostDto) {
        return this.postRepository.save(createPostDto);
    }
}