import { useState } from "react";
import { useQuery } from "react-query";
//components
import { Drawer } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
//style
import { Wrapper } from "./App.styles";

const getProducts = async () => {
  await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  return <div className="App">hello world</div>;
};

export default App;
