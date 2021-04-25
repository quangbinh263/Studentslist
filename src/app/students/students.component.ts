import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray, NgModel } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { NewstudentComponent } from '../newstudent/newstudent.component';
import { SearchComponent } from '../search/search.component';

export interface Studentslist {
  name: string;
  id: string;
  class: string;
  address: string;
  isShow: boolean
}

let ELEMENT_DATA: Studentslist[] = [
  {
    name: 'Nguyen Van A',
    id: '1',
    class: 'a1',
    address: 'lsoemlao',
    isShow: true
  },
  {
    name: 'Nguyen Van b',
    id: '2',
    class: 'a1',
    address: 'lsoemlao',
    isShow: true
  },
  {
    name: 'Nguyen Van C',
    id: '3',
    class: 'a1',
    address: 'lsoemlao',
    isShow: true
  },
  {
    name: 'Nguyen Van D',
    id: '4',
    class: 'a1',
    address: 'lsoemlao',
    isShow: true
  }
]


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'id', 'class', 'address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort?: MatSort;
  addStudent(newStudent: Studentslist){
    ELEMENT_DATA.push(newStudent);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }
  searchStudent(keyword: string){
    // const searchResult = ELEMENT_DATA.map((item) => {
    //   item.isShow = true;
    //   if(!item){
    //     return null
    //   }
    //   if(!keyword){
    //     return item
    //   }
    //   if(item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()){
    //     return item
    //   }
    //   else{
    //     item.isShow =false;
    //     return item
    //   });
    // this.dataSource = new MatTableDataSource(<any> searchResult);
    const searchResult = ELEMENT_DATA.map((item) =>{
      item.isShow = true;
      if(!keyword){
        return item
      }
      if(!item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())){
        item.isShow = false;
        return item
      }
      else{
        return item
      }
    })
    this.dataSource = new MatTableDataSource(searchResult);


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
  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(NewstudentComponent)
  }

  ngOnInit() {



  }

}
