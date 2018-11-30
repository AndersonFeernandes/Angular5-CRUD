import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Coin {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class CoinService {

  private uri = 'http://localhost:3000/coins/';

  constructor(private http: HttpClient) {
  }

  addCoin(name, price): void {
    const obj = {
      name: name,
      price: price
    };
    this.http.post(this.uri, obj).subscribe(res => console.log('Meoda Cadastrada'));
  }

  getCoins(): Observable<Coin> {
    return this.http.get(this.uri).pipe(map(res => res as Coin));
  }

  editCoin(id): Observable<Coin> {
    return this.http.get(this.uri + id).pipe(map(res => res as Coin));
  }

  updateCoin(name, price, id): void {
    const obj = {
      name: name,
      price: price
    };

    this.http.put(this.uri + id, obj).subscribe(res => console.log('Moeda Editada'));
  }

  deleteCoin(id): Observable<Coin> {
      return this.http.delete(this.uri + id).pipe(map(res => {
      console.log('Moeda deletada');
      return res as Coin;
    }));
  }
}
