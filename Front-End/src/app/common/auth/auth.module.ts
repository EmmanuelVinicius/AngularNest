import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthResource } from './services/auth.resource';
import { AuthService } from './services/auth.service';


@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [],
    declarations: [],
    providers: [
        AuthResource,
        AuthService
    ],
})
export class AuthModule { }
