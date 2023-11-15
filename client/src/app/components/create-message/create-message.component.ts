import { Component, Input } from '@angular/core';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Message } from 'src/app/messages/message';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css'],
})
export class CreateMessageComponent {
  @Input() userId: number | undefined | null;
  message: string;
  private _messageService: EntityCollectionService<Message>;

  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this._messageService = serviceFactory.create('Messages');
  }
  onSubmit() {
    if (this.userId)
      this._messageService.add({ message: this.message, userId: this.userId });
  }
}
