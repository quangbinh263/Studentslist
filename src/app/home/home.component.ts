import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = 'Huy';
  age = 40;
  vehicles = ['Toyota', 'Honda', 'Nissan', 'Xich Lo'];
  heroImageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  show = true;
  showNew = false;
  birthDay= new Date(2015, 7 , 25)
  newWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  filterStatus = 'allWords';
  newEn = '';
  newVn = '';
  showWords(memorized: boolean){
    const showAll = this.filterStatus === 'allWords';
    const showRemember = this.filterStatus === 'remember' && memorized;
    const showNotRemember = this.filterStatus === 'notRemember' && !memorized;
    return showAll || showRemember || showNotRemember
  }
  createNew (){
    this.newWords.push(
      {id: this.newWords.length + 1,
       en: this.newEn,
       vn: this.newVn,
       memorized: false
      }

    );
    this.newEn = '';
    this.newVn = '';
    this.showNew = false;

  }
  deleteWord(id:number){
    this.newWords = this.newWords.filter(item => item.id!==id)
  }
  addAge (){
    this.age++
  }
  constructor() { }

  ngOnInit(): void {
  }

}
