import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import {StudentsComponent} from '../students/students.component';
import { switchMap } from 'rxjs/operators';
import { Studentslist ,ELEMENT_DATA } from '../app.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  id: any;
  studentInfo!: Studentslist [];


  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.route.paramMap.subscribe( Params: ParamMap) => {
    //   this.id = params.get('id');
    //   this.name = params.get('name');
    //   this.class = params.get('class');
    //   this.address = params.get('address')

    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'],
    //   this.id = params['id'],
    //   this.class = params['class'],
    //   this.address = params['address']
    // })
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.studentInfo = ELEMENT_DATA.filter(item => item.id === this.id)
    }

  }

