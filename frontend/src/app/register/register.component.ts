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

  public constructor(private apollo: Apollo) {}

  public register() {
    this.apollo
      .mutate({
        mutation: SIGNUP,
        variables: {
          email: this.registerForm.value.email,
          userName: this.registerForm.value.userName,
          password: this.registerForm.value.password,
        },
      })
      .subscribe({
        next: (result) => {
          const token = result.data;
          console.log(token);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
