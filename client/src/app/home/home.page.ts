import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { Subscriber } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  infos: any;

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.homeService.getData().subscribe((response) => {
      this.infos = response;
    });
  }
}

// export class HomePage {

//   constructor(private router: Router) {}
//   handleCreateTodo() {
//   this.router.navigate(["/create-new-list"])
//   }
//   // TODO
//   // make function who send user at the right todo with id_todo
//   handleConsultTodo() {
//     this.router.navigate(["/todo-consulting"])
//   }
// }