import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

type submitNewsletterForm = {
  email: string;
  firstname: string;
  lastname: string;
};

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter {
  email?: '';

  submitForm(form: submitNewsletterForm) {
    console.log(form.email);
  }
}
