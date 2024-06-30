export const cart = []

export function addToCart(productId){
      
    let matchingItem;
    //Select quantity usin selector
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    const quantityValue = Number(quantitySelector.value);
    //Select quantity usin selector

    cart.forEach((item) => {
        if(productId === item.productId){
            matchingItem = item
        }
    })

    if(matchingItem){
        matchingItem.quantity += quantityValue
    }
    else{
        cart.push({
            productId: productId,
            quantity: quantityValue
          })
    }
  }