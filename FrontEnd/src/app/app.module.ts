import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';
import { SearchInventoryComponent } from './search-inventory/search-inventory.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent,
    UpdateInventoryComponent,
    CreateInventoryComponent,
    SearchInventoryComponent,
    SearchFilterPipe,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClarityModule
   // Ng2SearchPipeModule
    //
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
