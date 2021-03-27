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
  ngOnInit() {
    this.users = [
      {
        name: 'Jorge Arturo',
        lastname: 'Hernandez',
        age: '25',
        survayStatuts: 'Pendiente',
        company: 'Dreamcode',
        arl:'Positiva',
        documentNumber:"1222212313",
        area:"Desarrollo",
        address:"Cali",
        phoneNumber:'121212',
        charge:"Desarrollador de software",
        gender:"Masculino"
      },
      {
        name: 'Esteban',
        lastname: 'Camacho',
        age: '28',
        survayStatuts: 'Completada',
        company: 'Dreamcode',
        arl:'Positiva',
        documentNumber:"1223456",
        area:"Desarrollo",
        address:"Buga",
        phoneNumber:'11123232',
        charge:"Desarrollador de software",
        gender:"Masculino"
      },
      {
        name: 'Andres',
        lastname: 'Perez',
        age: '26',
        survayStatuts: 'Completada',
        company: 'Dreamcode',
        arl:'Positiva',
        documentNumber:"998989098",
        area:"Desarrollo",
        address:"Yumbo",
        phoneNumber:'00988',
        charge:"Desarrollador de software",
        gender:"Masculino"
      },
    ];
  }

  goToInfoUsuario(user: any) {
    this.router.navigate(['/user-detail'], { queryParams: user });
  }

  getPendingSurveys(status:string){
    return this.users.filter(x=> x.survayStatuts ===status).length
  }
}
