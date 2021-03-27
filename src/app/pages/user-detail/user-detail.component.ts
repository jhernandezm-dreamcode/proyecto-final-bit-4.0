import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user:any;
  constructor(private router: Router, private route: ActivatedRoute) {
    route.queryParams.subscribe((params) => {console.log(params); this.user = params});
  }
  saveInformation(){
    this.router.navigate(['/dashboard']);
  }
  getFullName(){
    return `${this.user.name} ${this.user.lastname}`;
  }
  ngOnInit(): void {}
}
