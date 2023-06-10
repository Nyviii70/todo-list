import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-list',
  templateUrl: './create-new-list.page.html',
  styleUrls: ['./create-new-list.page.scss'],
})
export class CreateNewListPage implements OnInit {

  constructor(private router: Router) {}
  handleReturnToBack() {
    this.router.navigate(["/home"])
  }
  ngOnInit() {
  }

}
