import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import {PersonComponent} from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { StudentsComponent} from './students/students.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { StudentComponent } from './student/student.component'
// import { StudentsModule } from './students/students.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'detail/:id/:name/:class/:address', component: StudentComponent },
  {path: 'about', component: AboutComponent},
  {path: 'students',component: StudentsComponent},
  {path: 'addstudent', component: NewstudentComponent}
]
@NgModule({
  imports: [
    // StudentsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],

  declarations:[

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
