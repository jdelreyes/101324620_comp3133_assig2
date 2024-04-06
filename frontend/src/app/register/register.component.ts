import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { SIGNUP } from '../graphql/graphql.queries';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  public title: string = 'Register';

  // form group represents the data we want to collect from the form
  public registerForm = new FormGroup({
    email: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  public constructor(private apolloService: Apollo, private router: Router) {}

  public onSubmit() {
    this.apolloService
      .mutate({
        mutation: SIGNUP,
        variables: {
          email: this.registerForm.value.email,
          userName: this.registerForm.value.userName,
          password: this.registerForm.value.password,
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
