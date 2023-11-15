import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-register',
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="form-control">
        <label for="text">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          [(ngModel)]="firstName"
          placeholder="First Name"
        />
      </div>
      <div class="form-control">
        <label for="text">Last Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          [(ngModel)]="lastName"
          placeholder="Last Name"
        />
      </div>
      <input type="submit" value="Register" class="btn" />
    </form>
  `,
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @Output('onSubmit') onRegister: EventEmitter<any> = new EventEmitter();
  firstName: string;
  lastName: string;

  onSubmit = () => {
    this.onRegister.emit({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  };
}
