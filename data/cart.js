class Cart {
    cartItems;
    #localStorageKey;

    constructor(localStorageKey){
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) 
    
    if(!this.cartItems){
       this.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:2,
            deliveryOptionId: '1'
        },{
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:1,
            deliveryOptionId: '2'
        }]
    }
    }

    addToCart(productId){
      
        let matchingItem;
        //Select quantity usin selector
        const quantitySelector = document.querySelector(
          `.js-quantity-selector-${productId}`
        );
        const quantityValue = Number(quantitySelector.value);
        //Select quantity usin selector
    
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem
            }
        })
    
        if(matchingItem){
            matchingItem.quantity += quantityValue
        }
        else{
            this.cartItems.push({
                productId: productId,
                quantity: quantityValue,
                deliveryOptionId: '1'
              })
        }
        this.saveToLocalStorage()
      }

     removeFromCart(productId){
        const newCart = []
        this.cartItems.forEach((cartItem) => {
            if(cartItem.productId !== productId){
                newCart.push(cartItem)
            }
        })
        this.cartItems = newCart
         this.saveToLocalStorage()
      }
    
     saveToLocalStorage(){
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems))
      }

     calculateCartQuantity(){
        let cartQuantity = 0
        this.cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity
        })
    
        return cartQuantity
      }
    
     updateQuantity(productId, newQuantity){
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem
           }
        })
        matchingItem.quantity = newQuantity
        this.saveToLocalStorage()
      }
    
    updateDeliveryOption(productId,deliveryOptionId){
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem
           }
        })
        matchingItem.deliveryOptionId = deliveryOptionId
        this.saveToLocalStorage()
      }

}


export const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');


console.log(cart);
console.log(businessCart);











