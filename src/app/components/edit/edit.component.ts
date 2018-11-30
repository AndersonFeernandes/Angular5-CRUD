import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  coin: any;
  angForm: FormGroup;
  title = 'Editar Moeda';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: CoinService,
              private fb: FormBuilder) {
                this.createForm();
              }

  ngOnInit() {
    this.route.params.subscribe(params => this.coin = this.service.editCoin(params['id']).subscribe(res => this.coin = res));
  }

  createForm(): void {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  updateCoin(name, price): void {
    this.route.params.subscribe(params => {
      this.service.updateCoin(name, price, params['id']);
      this.router.navigate(['index']);
    });
  }

  deleteCoin(id): void {
    this.service.deleteCoin(id).subscribe();
  }

}
