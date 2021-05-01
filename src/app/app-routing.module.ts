import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import {PersonComponent} from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
// import { StudentsModule} from './students/students.module';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { StudentComponent } from './student/student.component';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { StudentsComponent } from './students/students.component';
import { SearchComponent } from './search/search.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


// import { StudentsModule } from './students/students.module';

const routes: Routes = [
  // { path: 'detail/:id/:name/:class/:address', component: StudentComponent },
  // {path: '', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'student-detail/:id', component: StudentComponent},
  { path: '',   component: HomeComponent },
  {path: 'test', component: EditStudentComponent},
  { path: '**', component: PagenotfoundComponent }
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
