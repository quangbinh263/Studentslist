import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';
import { CardComponent} from './card.component';
import { RoundPipe } from './round.pipe';
import { IpComponent} from './ip.component';
import { SigninComponent } from './signin.component';
import { MaterialModule } from './material/material.module';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { NewstudentComponent } from './newstudent/newstudent.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    RoundPipe,
    IpComponent,
    SigninComponent,
    StudentsComponent,
    StudentComponent,
    NewstudentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
