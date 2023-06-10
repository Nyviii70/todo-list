import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-consulting',
  templateUrl: './todo-consulting.page.html',
  styleUrls: ['./todo-consulting.page.scss'],
})
export class TodoConsultingPage implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private router: Router) {}
  handleReturnToBack() {
    this.router.navigate(["/home"])
  }
  ngOnInit() {
  }

}