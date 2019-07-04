import { finalize } from 'rxjs/operators';
import { PostDto } from '../../datamodel/post-dto';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { CreatePostDialogComponent } from '../dialogs/create-post-dialog.component';
import * as _ from 'lodash';

@Component({
    selector: 'app-post-list',
    templateUrl: 'post-list.html'
})

export class PostListComponent implements OnInit {
    public displayedColumns: string[] = ['id', 'title', 'subtitle', 'imageURL'];
    private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject(null);

    public isLoading = false;
    constructor(private postService: PostService, private matDialog: MatDialog) { }

    ngOnInit() { 
        this.isLoading = true
        this.postService.getAllPostItems()
        .pipe(finalize(() => this.isLoading = false))
        .subscribe((postListItems) => this.postListSubject.next(postListItems));
    }

    public getPostList(): Observable<PostDto[]>{
        return this.postListSubject.asObservable();
    }

    public createPost() {
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width:'600px'
        })
        ref.afterClosed().subscribe((newPost: PostDto) => {
            if(newPost){
                const list = this.postListSubject.getValue();
                list.push(newPost);
                this.postListSubject.next(_.cloneDeep(list))
            }
        })
    }
}
