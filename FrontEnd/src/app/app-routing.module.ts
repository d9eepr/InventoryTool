import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { SearchInventoryComponent } from './search-inventory/search-inventory.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path: 'inventory', component: InventoryListComponent},
  {path: 'update-inventory/:id', component: UpdateInventoryComponent},
  {path: '', redirectTo:'inventory',pathMatch:'full'},
  {path: 'create-inventory', component: CreateInventoryComponent},
  {path: 'search-inventory', component: SearchInventoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
