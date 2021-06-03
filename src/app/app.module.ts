import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainheaderComponent } from './components/mainheader/mainheader.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {FlexLayoutModule} from '@angular/flex-layout';
//import { SidebarComponent } from './Home-Page/sidebar/sidebar.component';
import { ControlSidebarComponent} from './Home-Page/control-sidebar/control-sidebar.component';
//F:\UIBase\UIBaseV3\src\app\Home-Page\control-sidebar\control-sidebar.component.html
import { FooterComponent } from './Home-Page/footer/footer.component';
import { AddDynamicValidatorsComponent } from './components/add-dynamic-validators/add-dynamic-validators.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component'; 
//import { ControlSidebarComponent } from './Home-Page/control-sidebar/control-sidebar.component';
//import { AuthenticationComponent } from './authentication/authentication.component';

// import { LoginPageComponent } from './authentication/login-page/login-page.component';
// import { SignupPageComponent } from './authentication/signup-page/signup-page.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainheaderComponent,
    SearchBoxComponent,
    SignupComponent,
    LoginComponent,
    //SidebarComponent,
    FooterComponent,
    ControlSidebarComponent,
    AddDynamicValidatorsComponent,
    TemplateformComponent,
    ReactiveformComponent,
    // AuthenticationComponent,
    // LoginPageComponent,
    // SignupPageComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    //Angular Material
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    //AuthenticationRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
