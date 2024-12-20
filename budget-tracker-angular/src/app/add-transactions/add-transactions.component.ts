import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-add-transactions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-transactions.component.html',
  styleUrl: './add-transactions.component.css',
})
export class AddTransactionsComponent  {
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public service: ServicesService

  ) {

    this.form = formBuilder.group({
      //date:[null],
      category:[null],
      amount:[null],
      name:[null],
      // description:[null],
      type:["Receita"]
    })
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(
      (res) => console.log(res),
      (error) => this.onError()
    )
  }

  ngOnInit(){
  this.service.list().subscribe(list => console.log(list))


  }

  private onError(){
    alert('Erro ao salvar curso');
  }

}
