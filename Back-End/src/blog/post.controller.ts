import { Observable } from 'rxjs';
import { Controller, Get, Body, Post } from "@nestjs/common";
import { PostService } from './services/post.service';
import { PostEntity } from './post/post.entity';
import { CreatePostDto } from './dto/post.dto';

@Controller('posts')
export class PostController {
    
    constructor(private postService: PostService){ }

    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postService.findAll();
    }

    @Post()
    create(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }
}