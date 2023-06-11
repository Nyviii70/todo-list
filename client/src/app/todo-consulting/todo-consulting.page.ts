import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItemsServices } from '../services/todo-consulting.service';


@Component({
  selector: 'app-todo-consulting',
  templateUrl: './todo-consulting.page.html',
  styleUrls: ['./todo-consulting.page.scss'],
})
export class TodoConsultingPage implements OnInit {
  isModalOpen = false;
  data: any;
  listTitle: any;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private router: Router, private listItemsServices: ListItemsServices) {}
  handleReturnToBack() {
    this.router.navigate(["/home"])
  }
  ngOnInit(): void {
    this.listItemsServices.getData().subscribe((response) => {
      this.data = response.data;
      this.listTitle = response.data.title
    });
  }

}