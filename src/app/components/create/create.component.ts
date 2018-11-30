import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Adicionar Moedas';
  angForm: FormGroup;

  constructor(private coinService: CoinService, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(): void {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addCoin(name: string, price: number): void {
    this.coinService.addCoin(name, price);
  }
}
