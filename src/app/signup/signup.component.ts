import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    protected router: Router
  ) { }

  ngOnInit(): void {
  }
  navigateToLogin(){
    this.router.navigateByUrl('login')
  }
}
