import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LOGIN } from '../graphql/graphql.queries';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public title: string = 'Login';

  public loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private apolloService: Apollo, private router: Router) {}

  onSubmit() {
    this.apolloService
      .mutate({
        mutation: LOGIN,
        variables: {
          userName: this.loginForm.value.userName,
          password: this.loginForm.value.password,
        },
      })
      .subscribe({
        next: (result: any) => {
          const token: string = result.data['signup']['token'];

          localStorage.setItem('token', token);

          this.router.navigateByUrl('employee-list');
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
