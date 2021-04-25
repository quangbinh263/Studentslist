import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Studentslist {
  name: string;
  id: string;
  class: string;
  address: string;
  isShow: boolean
}

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent implements OnInit {
  studentInfo!: FormGroup;
  @Output() newStudent = new EventEmitter<Studentslist>();
    createStudent(value: Studentslist){
    this.newStudent.emit(value)
  }

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.studentInfo = this.fb.group({
      name: '',
      id: '',
      class: '',
      address: '',
      isShow: true
    });
  }

}
