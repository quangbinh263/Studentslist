import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Output, EventEmitter } from '@angular/core';
import { Studentslist } from '../newstudent/newstudent.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  searchWord = '';

  @ViewChild(MatSort) sort?: MatSort;
  @Output() searchKey = new EventEmitter<string>();
  searchName(value: string){
    this.searchKey.emit(value)
  }
  constructor() { }

  ngOnInit() {

  }

}
