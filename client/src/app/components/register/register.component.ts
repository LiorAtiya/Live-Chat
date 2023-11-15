import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;

  @Output() onRegister: EventEmitter<any> = new EventEmitter();

  constructor(private _store$: Store<any>) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.firstName || !this.lastName) {
      return alert('Fill details');
    }
    this.onRegister.emit({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
}
