import { Component, HostBinding } from '@angular/core';
import { Router }                 from '@angular/router';
@Component({
  templateUrl: './compose-message.component.html',
  styles: [ ':host { position: relative; bottom: 10%; }' ],
})
export class ComposeMessageComponent {
  constructor(private router: Router) {}
  send() {
    setTimeout(() => {
      this.closePopup();
    }, 1000);
  }
  cancel() {
    this.closePopup();
  }
  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}