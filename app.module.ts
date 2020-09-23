import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import {  RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {LoginvService} from '../app/loginv.service';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'myrpofile',component:HomeComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatInputModule,MatCheckboxModule,MatSidenavModule,
    AppRoutingModule,MatMenuModule,MatFormFieldModule,MatProgressBarModule,
    BrowserAnimationsModule,MatCardModule,MatSelectModule,MatProgressSpinnerModule,
    MatToolbarModule,MatIconModule,RouterModule.forRoot(routes),MatSnackBarModule,
   MatDialogModule,MatRadioModule,MatGridListModule,MatRippleModule,MatListModule,
   MatDividerModule,ReactiveFormsModule
  ],
  providers: [LoginvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
