import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Employee } from '../employee';
import { GET_EMPLOYEE } from '../graphql/graphql.queries';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [],
  templateUrl: './view-employee.component.html',
})
export class ViewEmployeeComponent {
  @Input()
  private employeeId: string | null =
    this.activatedRoute.snapshot.paramMap.get('id');
  private querySubscription: Subscription = new Subscription();

  public title: string = 'View Employee';
  public employee: Employee | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apolloService: Apollo
  ) {}

  ngOnInit() {
    this.querySubscription = this.apolloService
      .watchQuery<any>({
        query: GET_EMPLOYEE,
        variables: { _id: this.employeeId },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(data);
        this.employee = data.getEmployee;
      });
  }
}
