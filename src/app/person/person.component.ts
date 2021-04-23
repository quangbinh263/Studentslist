import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() name: string| undefined;
  @Input() age?: number;
  @Output() deletPersonByName = new EventEmitter<string>();

  constructor() {

   }

  ngOnInit(): void {
  }

  deleteByClick(){
    this.deletPersonByName.emit(this.name)
  }

}
