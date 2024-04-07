import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { DELETE_EMPLOYEE, GET_EMPLOYEES } from '../graphql/graphql.queries';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  private querySubscription: Subscription = new Subscription();

  public loading: boolean = true;
  public employees: Employee[] = [];
  public title: string = 'Employee List';

  constructor(private router: Router, private apolloService: Apollo) {}

  public addEmployee() {
    this.router.navigateByUrl('add-employee');
  }

  public updateEmployee(_id: string) {
    this.router.navigateByUrl(`update-employee/${_id}`);
  }

  public viewEmployee(_id: string) {
    this.router.navigateByUrl(`view-employee/${_id}`);
  }

  public deleteEmployee(_id: string) {
    this.apolloService
      .mutate({
        mutation: DELETE_EMPLOYEE,
        variables: {
          _id: _id,
        },
      })
      .subscribe({
        next: (result: any) => {
          window.location.reload()
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  public ngOnInit() {
    this.querySubscription = this.apolloService
      .watchQuery<any>({
        query: GET_EMPLOYEES,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.employees = data.getEmployees;
      });
  }
}
