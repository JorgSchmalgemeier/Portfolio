import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  nameValid = true;
  emailValid = true;
  messageValid = true;
  isLoading = false;
  sendMessage = false;

  contactForm = new FormGroup({
    nameForm: new FormControl('', [Validators.required,Validators.minLength(3),]),
    emailForm: new FormControl('', [Validators.required, Validators.email]),
    messageForm: new FormControl('', [Validators.required,Validators.minLength(5),]),
  });


  get nameForm() {
    return this.contactForm.get('nameForm');
  }


  get emailForm() {
    return this.contactForm.get('emailForm');
  }


  get messageForm() {
    return this.contactForm.get('messageForm');
  }


  sendMail() {
    this.isLoading = true;
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.nameField.nativeElement;

    this.disableFields(nameField, emailField, messageField, sendButton);
    this.fetchData(nameField, emailField, messageField);
    this.enableFields(nameField, emailField, messageField, sendButton);
    this.contactForm.reset();
    this.isLoading = false;
    this.showTextSuccess();
  }

  async fetchData(nameField: any, emailField: any, messageField: any) {
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
  }

  showTextSuccess() {
    this.sendMessage = true;
    console.log(this.sendMessage);
    setTimeout(() => {
      this.sendMessage = false;
      console.log(this.sendMessage);
    }, 2000);
  }

  disableFields(
    nameField: any,
    emailField: any,
    messageField: any,
    sendButton: any
  ) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }

  enableFields(
    nameField: any,
    emailField: any,
    messageField: any,
    sendButton: any
  ) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }

  checkNameField() {
    if (
      this.nameForm?.invalid &&
      (this.nameForm?.dirty || this.nameForm?.touched)
    ) {
      this.nameValid = false;
    } else {
      this.nameValid = true;
    }
  }

  checkEmailField() {
    if (
      this.emailForm?.invalid &&
      (this.emailForm?.dirty || this.emailForm?.touched)
    ) {
      this.emailValid = false;
    } else {
      this.emailValid = true;
    }
  }

  checkMessageField() {
    if (
      this.messageForm?.invalid &&
      (this.messageForm?.dirty || this.messageForm?.touched)
    ) {
      this.messageValid = false;
    } else {
      this.messageValid = true;
    }
  }
}
