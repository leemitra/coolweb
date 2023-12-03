import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
    
  {path: 'users', children:[
    {path: '', component: ListUsersComponent},
    {path: 'list', component: ListUsersComponent},
    {path: 'view/:id', component: ViewUsersComponent},
    {path: 'delete/:id', component: DeleteUserComponent},
    {path: 'edit/:id', component: EditUserComponent},
    {path: 'create', component: AddUserComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
