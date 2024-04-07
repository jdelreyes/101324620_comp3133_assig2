import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CREATE_EMPLOYEE } from '../graphql/graphql.queries';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
})
export class AddEmployeeComponent {
  public title: string = 'Add Employee';

  public addEmployeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailId: new FormControl(''),
  });

  public constructor(private apolloService: Apollo, private router: Router) {}

  public onSave() {
    this.apolloService
      .mutate({
        mutation: CREATE_EMPLOYEE,
        variables: {
          firstName: this.addEmployeeForm.value.firstName,
          lastName: this.addEmployeeForm.value.lastName,
          email: this.addEmployeeForm.value.emailId,
          salary: 10.0,
        },
      })
      .subscribe({
        next: (result: any) => {
          this.router.navigateByUrl('employee-list').then(() => {
            window.location.reload();
          });
        },
      });
  }

  public onCancel() {
    this.router.navigateByUrl('employee-list');
  }
}
