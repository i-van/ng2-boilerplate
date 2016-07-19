import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import template from './user-index.component.html';
import FullNamePipe from '../full-name.pipe';
import UserService from '../user.service';

import { Modal, BS_MODAL_PROVIDERS } from 'angular2-modal/plugins/bootstrap';
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser/index';
import { DialogRef } from 'angular2-modal';

@Component({
  selector: 'user-index',
  providers: [UserService, MODAL_BROWSER_PROVIDERS, BS_MODAL_PROVIDERS],
  pipes: [FullNamePipe],
  directives: [ROUTER_DIRECTIVES],
  template
})
export default class UserIndexComponent {
  constructor(userService: UserService, modal: Modal, viewContainer: ViewContainerRef) {
    this.userService = userService;
    this.modal = modal;
    this.users = [];

    this.modal.defaultViewContainer = viewContainer;
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.fetch()
      .subscribe(users => this.users = users);
  }

  confirmRemovingUser(userId: number) {
    this.modal.confirm()
      .size('sm')
      .keyboard(27)
      .title('Confirmation')
      .body('Do you really want to remove this item?')
      .okBtn('Yes')
      .cancelBtn('No')
      .open()
      .then(dialog => dialog.result)
      .then(res => res && this.removeUser(userId))
      .catch(err => console.log('Modal error:', err));
  }

  removeUser(userId: number) {
    this.userService.remove(userId)
      .subscribe(() => this.loadUsers());
  }
}
