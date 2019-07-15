import { EditPostDto } from './../../../../../../Back-End/src/blog/dto/edit.post.dto';
import { finalize } from 'rxjs/operators';
import { PostDto } from '../../datamodel/post-dto';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import * as _ from 'lodash';
import { ConfirmationDialogComponent } from '../../dialog/confirmation-dialog.component';
import { CreatePostDialogComponent } from '../dialogs/create-post-dialog.component';

@Component({
    selector: 'app-post-list',
    templateUrl: 'post-list.html',
    styleUrls: ['post-list.style.scss']
})

export class PostListComponent implements OnInit {
    public displayedColumns: string[] = ['id', 'title', 'subtitle', 'imageURL', 'action'];
    private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject(null);

    public isLoading = false;
    constructor(private postService: PostService, private matDialog: MatDialog) { }

    ngOnInit() {
        this.isLoading = true
        this.postService.getAllPostItems()
            .pipe(finalize(() => this.isLoading = false))
            .subscribe((postListItems) => this.postListSubject.next(postListItems));
    }

    public getPostList(): Observable<PostDto[]> {
        return this.postListSubject.asObservable();
    }

    public createPost() {
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px'
        })
        ref.afterClosed().subscribe((newPost: PostDto) => {
            if (newPost) {
                const list = this.postListSubject.getValue();
                list.push(newPost);
                this.postListSubject.next(_.cloneDeep(list))
            }
        })
    }

    public editPost(editPost: EditPostDto) {
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px',
            data: { editPostDto: editPost }
        })
        ref.afterClosed().subscribe((editedPost: PostDto) => {
            if (editedPost) {
                const list = this.postListSubject.getValue();
                const postIndex = _.findIndex(list, (post) => post.id === editedPost.id)
                list[postIndex] = editedPost;
                this.postListSubject.next(_.cloneDeep(list))
            }
        })
    }

    public deletePost(postDto: PostDto) {
        const ref = this.matDialog.open(ConfirmationDialogComponent, { width: '300px' });
        ref.afterClosed().subscribe((canContinue) => {
            console.log('canContinue', canContinue)
            if (canContinue) {
                this.isLoading = true;
                this.postService.deletePost(postDto.id)
                    .pipe(finalize(() => this.isLoading = false))
                    .subscribe(() => {
                        const list = this.postListSubject.getValue();
                        _.remove(list, post => post.id === postDto.id)
                        this.postListSubject.next(_.cloneDeep(list))
                    })
            }
        })
    }
}
