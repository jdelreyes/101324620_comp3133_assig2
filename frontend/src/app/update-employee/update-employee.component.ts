import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { GET_EMPLOYEE, UPDATE_EMPLOYEE } from '../graphql/graphql.queries';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './update-employee.component.html',
})
export class UpdateEmployeeComponent {
  @Input()
  private _id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
  private querySubscription: Subscription = new Subscription();

  public title: string = 'Update Employee';

  public addEmployeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailId: new FormControl(''),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apolloService: Apollo
  ) {}

  public onSave() {
    this.apolloService
      .mutate({
        mutation: UPDATE_EMPLOYEE,
        variables: {
          _id: this._id,
          firstName: this.addEmployeeForm.value.firstName,
          lastName: this.addEmployeeForm.value.lastName,
          email: this.addEmployeeForm.value.emailId,
        },
      })
      .subscribe({
        next: (result: any) => {
          this.router.navigateByUrl('employee-list').then(() => {
            window.location.reload();
          });
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  public onCancel() {
    this.router.navigateByUrl('employee-list');
  }

  public ngOnInit() {
    this.querySubscription = this.apolloService
      .watchQuery<any>({
        query: GET_EMPLOYEE,
        variables: { _id: this._id },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        const employeeData = data.getEmployee;
        this.addEmployeeForm.patchValue({
          firstName: employeeData.firstName,
          lastName: employeeData.lastName,
          emailId: employeeData.email,
        });
      });
  }
}
