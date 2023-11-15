import { Component } from '@angular/core';
import {
  EntityCollectionServiceFactory,
  EntityCollectionService,
} from '@ngrx/data';
import { User } from './users/user';
import { Store, select } from '@ngrx/store';
import { setRegisteredUser } from './users/actions/users.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _usersService: EntityCollectionService<User>;

  title = 'Redux Stupid Chat';
  rightUserId$: Observable<number>= this._store$.pipe(
    select('users', 'rightUser')
  )

  leftUserId$: Observable<number> = this._store$.pipe(
    select('users', 'leftUser')
  )

  constructor(
    serviceFactory: EntityCollectionServiceFactory,
    private _store$: Store<any>
  ) {
    this._usersService = serviceFactory.create('Users');
  }

  registerUser(values: any, side: string) {
    this._usersService.add(values).subscribe((user: User) => {
      this._store$.dispatch(setRegisteredUser({ id: user.id, side: side }));
    });
  }
}
