import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  nameInputValue = false;
  emailInputValue = false;
  messageInputValue = false;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.nameField.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    //Ladeanimation einfügen

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    //senden
    await fetch(
      'https://joerg-schmalgemeier.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    //Text anzeigen, Nachricht gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }

  /*checkInputValues(field:any) {
    let nameField = this.nameField.nativeElement;
    let nameFieldDiv = this.nameFieldDiv.nativeElement;
    let nameFieldAlert = this.nameFieldAlert.nativeElement;
    if (this.nameField.nativeElement.value.length == 1 || field.value.length == 2 ) {
      nameFieldDiv.classList.add('red-border');
      nameFieldAlert.classList.add('d-flex');
    } else {
      this.nameFieldDiv.nativeElement.classList.remove('red-border');
      nameFieldAlert.classList.remove('d-flex');
    }
  }*/

  checkNameField() {
    if (this.nameField?.nativeElement == 1 || this.nameField?.nativeElement == 2) {
      return true;
    } else {
      return false;
    }
  }

  checkEmailField() {
    if (this.emailField.nativeElement.value.length == 1 || this.emailField.nativeElement.value.length == 2) {
      this.emailInputValue = true;
    } else {
      this.emailInputValue = false;
    }
  }
}


