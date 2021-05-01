import { Component, Inject, OnInit, ViewChild } from '@angular/core';
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
  // isShow: boolean
}

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent implements OnInit {
  studentInfo!: FormGroup;
  @Output() newStudent = new EventEmitter<Studentslist>();


  constructor(private fb: FormBuilder,
    private matDialogRef: MatDialogRef<NewstudentComponent>,
                          @Inject(MAT_DIALOG_DATA) public data:{id: string, name: string, class: string, address: string}) { }


  ngOnInit() {
    this.studentInfo = this.fb.group({
      name: this.data?this.data.name:undefined,
      id: this.data?this.data.id:undefined,
      class: this.data?this.data.class:undefined,
      address: this.data?this.data.address:undefined,
      // isShow: true
    });
  }

  createStudent(value: Studentslist){
    this.matDialogRef.close(value)
  }

}

