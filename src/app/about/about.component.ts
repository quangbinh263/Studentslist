import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// const ELEMENT_DATA = [
//   {
//     orderDate: new Date(),
//     orderNumber: 100,
//     total: 29.99,
//     description: '2lbs of tuna',
//     isChecked: false
//   },
//   {
//     orderDate: new Date(),
//     orderNumber: 102,
//     total: 49.99,
//     description: '3lbs of tuna',
//     isChecked: false
//   },{
//     orderDate: new Date(),
//     orderNumber: 101,
//     total: 59.99,
//     description: '7lbs of tuna',
//     isChecked: false
//   }
// ]
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  myForm!: FormGroup;
  // displayedColums?: ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private fb: FormBuilder ) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: '',
      career: '',
      phones: this.fb.array([])
    })

  }
  get phoneForms(){
    return this.myForm.get('phones') as FormArray
  };
  addPhone(){
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })
    this.phoneForms.push(phone);
  }

  deletePhone(i:number){
    this.phoneForms.removeAt(i)
  }

  // this.dataSource = this.sort

}
