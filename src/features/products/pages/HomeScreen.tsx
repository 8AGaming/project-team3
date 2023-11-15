import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [topCategories, setTopCategories] = useState<string[]>([]);
  const [topProducts, setTopProducts] = useState<string[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await fetch("/api/categories");
      const categories = await categoriesData.json();
      setCategories(categories);
    };
    const fetchTopData = async () => {
      const topData = await fetch("/api/topData");
      const { topCategories, topProducts } = await topData.json();
      setTopCategories(topCategories);
      setTopProducts(topProducts);
    };
    fetchCategories();
    fetchTopData();
  }, []);
  const handleCategoryClick = (category: string) => {
    console.log(`Switching to ${category} page...`);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">the Store of team 3</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <List>
          {categories.map((category, index) => (
            <ListItem
              key={index}
              button
              onClick={() => handleCategoryClick(category)}
            >
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
        <Card>
          <CardHeader title="Top Five Categories" />
          <CardContent>
            <List>
              {topCategories.map((category, index) => (
                <ListItem key={index}>
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Top Five Products" />
          <CardContent>
            <List>
              {topProducts.map((product, index) => (
                <ListItem key={index}>
                  <ListItemText primary={product} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
export default HomeScreen;
