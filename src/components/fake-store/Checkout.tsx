import { CartItem } from "./components/CartItem";
import { useStoreSelector } from "./store/hooks";

export function Checkout() {
  const cartSelector = useStoreSelector((state) => state.cart);
  const itemsSelector = useStoreSelector((state) => state.item.items);

  let total = 0;
  return (
    <div className="container col-8 gap-3 mt-3 mb-3">
      {cartSelector &&
        cartSelector.cart?.products.map((item) => {
          const cartItem = itemsSelector.find(
            (store) => store.id === item.productId
          );
          total += cartItem!.price * item.quantity;
          return (
            <CartItem
              key={item.productId}
              id={item.productId}
              image={cartItem!.image}
              title={cartItem!.title}
              amount={item.quantity}
              price={cartItem!.price}
            />
          );
        })}
      <h3> Total: ${total}</h3> <button>pay</button>
    </div>
  );
}
