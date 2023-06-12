import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from '../services/create.service';

@Component({
  selector: 'app-create-new-list',
  templateUrl: './create-new-list.page.html',
  styleUrls: ['./create-new-list.page.scss'],
})
export class CreateNewListPage implements OnInit {

  constructor(private createService: CreateService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitData() {
    const data = { /* Vos données à envoyer */ };

    this.createService.postData(data).subscribe(response => {
      console.log(response); // Gérer la réponse de la requête ici
    });
  }

}

// export class CreateNewListPage implements OnInit {

//   constructor(private router: Router) {}
//   handleReturnToBack() {
//     this.router.navigate(["/home"])
//   }
//   // TODO
//   // add function who send the new todo to the database
//   handleAddTodo() {
//     console.log("enregistré")
//     this.router.navigate(["/home"])
//   }
//   ngOnInit() {
//   }

// }