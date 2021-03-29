import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShown:boolean = false;
  title = 'restaurant';

constructor(private _router: Router)
{}
  loggedIn()
  {
    return localStorage.getItem('token');
  }
  onLogout()
  {
    localStorage.removeItem('token');
    this._router.navigate(['login']);
  }
}
