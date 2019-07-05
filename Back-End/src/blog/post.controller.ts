import { EditPostDto } from './dto/edit.post.dto';
import { Observable } from 'rxjs';
import { Controller, Get, Body, Post, Put, Delete, Param } from "@nestjs/common";
import { PostService } from './services/post.service';
import { PostEntity } from './post/post.entity';
import { CreatePostDto } from './dto/create.post.dto';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostController {
    
    constructor(private postService: PostService){ }

    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postService.findAll();
    }

    @Post()
    create(@Body() createPostDto: CreatePostDto): Promise<PostDto> {
        return this.postService.create(createPostDto);
    }

    @Put()
    edit(@Body() editPostDto: EditPostDto): Promise<PostDto> {
        return this.postService.edit(editPostDto);
    }

    @Delete(':id')
    delete(@Param() postId: number) {
        this.postService.delete(postId);
    }
}