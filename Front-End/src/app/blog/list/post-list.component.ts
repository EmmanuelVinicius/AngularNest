import { PostListItem } from './../datamodel/post-list-item';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-post-list',
    templateUrl: 'post-list.html'
})

export class PostListComponent implements OnInit {
    public postList: Observable<PostListItem[]>;
    constructor(private postService: PostService) { }

    ngOnInit() { 
        this.postList = this.postService.getAllPostItems();
    }
}
