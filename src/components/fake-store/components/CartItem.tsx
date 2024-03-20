import { addCart, removeCart } from "../store/cart-slice";
import { useStoreDispatch } from "../store/hooks";

type CartItemProps = {
  id: number;
  image: string;
  title: string;
  amount: number;
  price: number;
};

export function CartItem(props: CartItemProps) {
  const cartDispatch = useStoreDispatch();

  const { id, image, title, amount, price } = props;
  return (
    <div className="d-flex flex-row gap-3 border rounded p-3">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="d-flex flex-column gap-4">
        <h3 className="fw-light">{title}</h3>
        <div className="d-flex flex-column align-items-end gap-2">
          <div className="d-flex align-items-center">
            <h3 className="fw-lighter fst-italic me-3 mb-0">Amount:</h3>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                cartDispatch(removeCart({ id: id, quantity: 1 }));
              }}
            >
              -
            </button>
            <h3 className="ms-3 me-3 mb-0">{amount}</h3>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                cartDispatch(addCart({ id: id, quantity: 1 }));
              }}
            >
              +
            </button>
          </div>
          <h3>Price: ${(price * amount).toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}
