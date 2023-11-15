import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from 'src/app/messages/message';
import { map } from 'rxjs/operators';
import { Dictionary } from '@ngrx/entity';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent {
  @Input() userId: number | undefined | null;

  userDeatails$: Observable<User | undefined> = this._store.pipe(
    select('entityCache', 'Users', 'entities'),
    map((users: Dictionary<User>) => users[this.userId ? this.userId : 1])
  );

  messages$: Observable<Message[]> = this._store.pipe(
    select('entityCache', 'Messages', 'entities'),
    map((messages: Dictionary<Message>) => {
      const messageArray: Message[] = [];
      for (let message of Object.values(messages)) {
        if (message && message.userId == this.userId) {
          messageArray.push(message);
        }
      }
      return messageArray;
    })
  );

  chat!: string;

  constructor(private _store: Store<any>) {}
}
