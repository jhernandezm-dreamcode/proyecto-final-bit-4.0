import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
 
  constructor(private router: Router) {}

  users: Array<any> = [];
  user1 = {
    name: 'Jorge Arturo',
    lastname: 'Hernandez',
    age: '25',
    survayStatuts: 'Pendiente',
  };
  ngOnInit() {
    this.users = [
      {
        name: 'Jorge Arturo',
        lastname: 'Hernandez',
        age: '25',
        survayStatuts: 'Pendiente',
      },
      {
        name: 'Esteban',
        lastname: 'Camacho',
        age: '28',
        survayStatuts: 'Completada',
      },
    ];
  }

  goToInfoUsuario(user: any) {
    this.router.navigate(['/user-detail'], { queryParams: user });
  }
}
