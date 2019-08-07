import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  checkoutForm;
  cost = 0;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems();
    this.cost = this.cartService.getTotalCost();
    this.checkoutForm = this.formBuilder.group({
      name: '', address: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    console.warn('Your order has been submited', customerData);
    this.items = this.cartService.clearCart();
    this.cost = 0;
    this.checkoutForm.reset();
  }

}