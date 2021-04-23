import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Studentslist {
  name: string;
  id: string;
  class: string;
  address: string;
}

let ELEMENT_DATA: Studentslist[] = [
  {
    name: 'Nguyen Van A',
    id: '1',
    class: 'a1',
    address: 'lsoemlao'
  },
  {
    name: 'Nguyen Van b',
    id: '2',
    class: 'a1',
    address: 'lsoemlao'
  },
  {
    name: 'Nguyen Van D',
    id: '3',
    class: 'a1',
    address: 'lsoemlao'
  },
  {
    name: 'Nguyen Van D',
    id: '4',
    class: 'a1',
    address: 'lsoemlao'
  }
]


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'id', 'class', 'address'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatSort) sort?: MatSort;
  addStudent(newStudent: Studentslist){
    this.dataSource.push(newStudent);
    console.log(newStudent);

  }


  // createStudent(){
  //  this.dataSource.push(
  //    {
  //      name: this.studentInfo.value.name,
  //      id: this.studentInfo.value.id,
  //      class: this.studentInfo.value.class,
  //      address: this.studentInfo.value.address
  //    }
  //  );


  // }
  constructor() { }

  ngOnInit() {



  }

}
