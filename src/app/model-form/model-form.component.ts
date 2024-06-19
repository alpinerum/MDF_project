import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.css'
})
export class ModelFormComponent {

  modelForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
}
