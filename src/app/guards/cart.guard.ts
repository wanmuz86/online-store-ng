import { CanDeactivateFn } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';

//CanDeactivateFn, need to specity where it is going to be used
export const cartGuard: CanDeactivateFn<CartComponent> = () => {
  // logic
  // get item from cart 
  // const cartService = inject(CartService)
  // if (cartService.isEmpty) return true
 const confirmation = confirm('You have pending items in your cart. Do you want to continue?')
 return confirmation;
};
