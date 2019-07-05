import { LoginRoutes } from './login.routes';
import { CommonMaterialModule } from './../common/common-material.module';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModule,
        RouterModule.forChild(LoginRoutes),
        FormsModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
