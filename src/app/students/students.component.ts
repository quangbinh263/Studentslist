import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray, NgModel } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { NewstudentComponent } from '../newstudent/newstudent.component';
import { SearchComponent } from '../search/search.component';
import { SharedService } from '../shared.service';
import { ELEMENT_DATA } from '../app.component';
import {MatPaginator} from '@angular/material/paginator';



export interface Studentslist {
  name: string;
  id: string;
  class: string;
  address: string;
  // isShow: boolean
}


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'id', 'class', 'address', 'detail', 'edit', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }


  addStudent(newStudent: Studentslist){
    ELEMENT_DATA.push(newStudent);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;

  }

    // message: Studentslist[]= ELEMENT_DATA
    ngOnInit() {
      // this.sharedService.currentMessage.subscribe(
      //   (message) => (this.message = message)
      // )
      console.log(ELEMENT_DATA);
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
    // const searchResult = ELEMENT_DATA.map((item) =>{
    //   item.isShow = true;
    //   if(!keyword){
    //     return item
    //   }
    //   if(!item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())){
    //     item.isShow = false;
    //     return item
    //   }
    //   else{
    //     return item
    //   }
    // })
    const searchResult = ELEMENT_DATA.filter(item => item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
    this.dataSource = new MatTableDataSource(searchResult);


  }

    editStudent(id: string, studentEdit: Studentslist){
      const getStudent = ELEMENT_DATA.filter(item => item.id === id);
      const getIndexStudent = ELEMENT_DATA.indexOf(getStudent[0]);
      ELEMENT_DATA[getIndexStudent] = studentEdit;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA)
    }

    deleteStudent(id: string){
      const choiceStudent = ELEMENT_DATA.filter(item => item.id === id);
      const indexStudent = ELEMENT_DATA.indexOf(choiceStudent[0]);
      ELEMENT_DATA.splice(indexStudent, 1);
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;

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

  studentAll: Studentslist [] = [];
  constructor(public dialog: MatDialog,
    private sharedService: SharedService) { }
  openDialog() {
    this.dialog.open(NewstudentComponent, {


    }).afterClosed().subscribe((data: any) => {
      if(data.id && data.name && data.class && data.address){
        this.addStudent(data);
        console.log('close message :',data);
      }

    });
  }


  openDialogEdit(id: string, name: string, myClass: string, address: string) {
    this.dialog.open(NewstudentComponent, {
    data:{id: id, name: name, class: myClass, address: address}

    }).afterClosed().subscribe((data: Studentslist) => {
        if(data){
          this.editStudent(id, data);
          console.log('close message :',data)
        }
      ;
    });
  }




}
