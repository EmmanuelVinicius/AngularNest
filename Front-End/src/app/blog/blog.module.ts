import { CommonMaterialModule } from 'src/app/common/common-material.module';
import { PostModule } from './posts/post.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog.component';
import { RouterModule } from '@angular/router';
import { BlogRouting } from './blog.routing';
import { BlogGuard } from './guards/blog.guard';

@NgModule({
    imports: [
        PostModule,
        HttpClientModule,
        CommonMaterialModule,
        RouterModule.forChild(BlogRouting)
    ],
    exports: [
        PostModule,
        CommonMaterialModule
    ],
    declarations: [
        ConfirmationDialogComponent
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ],
    providers: [
        BlogGuard
    ]

})
export class BlogModule { }
