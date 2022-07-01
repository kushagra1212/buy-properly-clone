import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: Boolean = false;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.loggedIn$.subscribe((data) => (this.isLoggedIn = data));
  }
  checkIsLoggedIn() {
    if (this.authService.isLoggedIn()) this.isLoggedIn = true;
  }
  logOuthandler() {
    this.authService.logOut();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
  logInHandler() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.checkIsLoggedIn();
  }
}
