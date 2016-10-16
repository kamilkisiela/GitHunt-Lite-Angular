import { Component } from '@angular/core';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent {
  error: string;
  repoFullName: string;

  constructor() { }

  submit() {
    if (!this.repoFullName) {
      return;
    }

    this.error = null;
  }

}
