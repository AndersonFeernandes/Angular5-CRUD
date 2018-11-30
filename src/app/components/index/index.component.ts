import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  coins: any;

  constructor(private http: HttpClient, private service: CoinService) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins(): void{
    this.service.getCoins().subscribe(res => {
      this.coins = res;
    });
  }

  deleteCoin(id): void {
    this.service.deleteCoin(id).subscribe();
    this.getCoins();
  }


}
