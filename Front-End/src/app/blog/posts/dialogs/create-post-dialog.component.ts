import { CreatePostDto } from '../../../../../../Back-End/src/blog/dto/create.post.dto';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { finalize } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditPostDto } from './../../datamodel/edit-post.dto';
import * as _ from 'lodash';
import { PostDto } from '../../datamodel/post-dto';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-create-post-dialog',
    templateUrl: 'create-post-dialog.html'
})

export class CreatePostDialogComponent implements OnInit {
    public postModel: CreatePostDto | EditPostDto = {} as CreatePostDto;
    public isLoading = false;
    public isEditing = false;
    constructor(private dialogRef: MatDialogRef<CreatePostDialogComponent>,
        private postService: PostService,
        @Inject(MAT_DIALOG_DATA) public data: { editPostDto: EditPostDto },
    ) { }

    ngOnInit(): void {
        this.isEditing = !!_.get(this.data, 'editPostDto')
        if (this.isEditing)
            this.postModel = _.cloneDeep(this.data.editPostDto);
    }
    public submit(form: NgForm) {

        if (form.valid) {
            this.isLoading = true;
            this.handleAfterSubmit(
                this.isEditing ?
                    this.postService.editPost(this.postModel as EditPostDto) :
                    this.postService.createPost(this.postModel)
            );
        }
    }

    private handleAfterSubmit(observable: Observable<PostDto>) {
        return observable
            .pipe(finalize(() => this.isLoading = false))
            .subscribe((response) => {
                this.dialogRef.close(response);
            });
    }
}