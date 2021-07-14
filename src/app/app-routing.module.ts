import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainheaderComponent } from './components/mainheader/mainheader.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './Home-Page/footer/footer.component';
//import { AuthenticationModule}'./authentication/authentication.module.ts';
import { ControlSidebarComponent} from './Home-Page/control-sidebar/control-sidebar.component';
import { AddDynamicValidatorsComponent } from './components/add-dynamic-validators/add-dynamic-validators.component';
import { TemplateformComponent } from './templateform/templateform.component'; 
import { EmployeeCountComponent } from './components/employee-count/employee-count.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
  
   {path:'', component:HeaderComponent},
   {path:'footer', component:FooterComponent},
   {path:'mainheader', component: MainheaderComponent},
   {path:'searchBox', component: SearchBoxComponent},
   {path:'signup', component: SignupComponent},
   {path:'login', component: LoginComponent},
   {path:'sidebar', component: ControlSidebarComponent},
   {path:'add', component:AddDynamicValidatorsComponent},
   {path:'template',component:TemplateformComponent},
   {path:'Emplist', component:EmployeeListComponent},
   
   {path:'authentication', loadChildren: './authentication/authentication.module#AuthenticationModule'}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
