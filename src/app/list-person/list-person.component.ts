import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  arrPerson = [
    {name: 'Jack', age: 15},
    {name:'Jil', age: 20},
    {name: 'Leo', age: 17}
  ]
  deletePerson(name: string){
    this.arrPerson = this.arrPerson.filter(person => person.name!==name)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
