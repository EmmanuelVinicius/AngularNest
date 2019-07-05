import { PostListComponent } from './posts/list/post-list.component';
import { Route } from "@angular/router";
import { BlogGuard } from './guards/blog.guard';

export const BlogRouting: Route[] = [
    {
        path: 'blog', children: [
            { path: 'list', component: PostListComponent, canActivate: [BlogGuard] }
        ]
    }
];