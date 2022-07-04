import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: Boolean = false;
  defaultLang: String = 'en';
  selectedLang: String = 'en';
  constructor(
    private authService: AuthService,
    private router: Router,
    public translate: TranslateService
  ) {
    this.authService.loggedIn$.subscribe(
      (isLogged) => (this.isLoggedIn = isLogged)
    );
  }
  checkIsLoggedIn(): void {
    if (this.authService.isLoggedIn()) this.isLoggedIn = true;
  }
  logoutHandler(): void {
    this.authService.logOut();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
  loginHandler() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.checkIsLoggedIn();
  }
  onLanguageChange(lang: string): void {
    this.translate.use(lang);
  }
}
