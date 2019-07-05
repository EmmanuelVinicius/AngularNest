import { CreatePostDto } from '../../../../../../Back-End/src/blog/dto/create.post.dto';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { finalize } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-create-post-dialog',
    templateUrl: 'create-post-dialog.html'
})

export class CreatePostDialogComponent {
    public newPostModel: CreatePostDto = {} as CreatePostDto;
    public isLoading = false;
    constructor(private dialogRef: MatDialogRef<CreatePostDialogComponent>, private postService: PostService) { }

    public submit(form: NgForm){
        console.log(form);
        if(form.valid){
            this.isLoading = true;
            this.postService.createPost(this.newPostModel)
            .pipe(finalize(() => this.isLoading = false))
            .subscribe((response) => {
                this.dialogRef.close(response);
            });
            console.log('i got here, now (form.valid)')
        }
    }
}