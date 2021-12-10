import { useState } from "react";
import { useQuery } from "react-query";
//components
import Item from "./Item/Item";
import { Drawer } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Badge } from "@material-ui/core";
//style
import { Wrapper, StyledButton } from "./App.styles";
//types
export type CartItemType = {
  id: NumberConstructor;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [CartOpen, setCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>something went wrong</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={CartOpen} onClose={() => setCartOpen(false)}>
        cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge color="error" badgeContent={getTotalItems(CartItems)}>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
