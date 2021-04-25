import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  name = '';
  id ='';
  class = '';
  address = '';

  constructor(private route: ActivatedRoute) { }

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
    }
  }

