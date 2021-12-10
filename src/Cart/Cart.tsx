import CartItem from "../CartItem/CartItem";

//styles
import { Wrapper } from "./Cart.styles";
//types
import { CartItemType } from "../App";

type Props = {
  CartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ CartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2> your shopping cart</h2>
      {CartItems.length === 0 ? <p>No items in cart</p> : null}
      {CartItems.map((item) => (
        <CartItem />
      ))}
    </Wrapper>
  );
};

export default Cart;
