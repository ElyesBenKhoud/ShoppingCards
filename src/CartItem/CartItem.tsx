import { Button } from "@material-ui/core";

//types
import { CartItemType } from "../App";
//style
import { Wrapper } from "./CartItem.styles";
type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const CartItem: React.FC = () => <div> Cart Item</div>;

export default CartItem;
