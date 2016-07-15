import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './user-edit.component.html';
import FormInputComponent from '../../../common/form-input/form-input.component';
import UserService from '../user.service';

@Component({
  selector: 'user-edit',
  providers: [UserService],
  directives: [FormInputComponent],
  template
})
export default class UserComponent {
  constructor(route: ActivatedRoute, router: Router, userService: UserService) {
    this.user = {};
    this.loading = false;
    this.route = route;
    this.router = router;
    this.userService = userService;
  }

  ngOnInit() {
    this.loading = true;

    this.route.params
      .subscribe(params => {
        this.userService.fetchOne(+params.id)
          .subscribe(user => {
            this.loading = false;
            this.user = user;
          });
      });
  }

  save() {
    this.loading = true;

    this.userService.update(this.user)
      .subscribe(() => {
        this.loading = false;
        this.router.navigate(['/users']);
      });
  }
}
