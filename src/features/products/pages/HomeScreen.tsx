// import { useEffect, useState } from "react";
// import axios from "axios";

// const HomeScreen = () => {
//   const [categories, setCategories] = useState<string[]>([]);
//   const [topCategories, setTopCategories] = useState<string[]>([]);
//   const [topProducts, setTopProducts] = useState<string[]>([]);

//   useEffect(() => {
//     //  פאצ של קטגוריות מהשרת
//     const fetchCategories = async () => {
//       const categories: string[] = await axios("/api/categories").then(
//         (res) => res.data
//       );
//       setCategories(categories);
//     };

//     // פאצ של הקטגוריות
//     const fetchTopCategories = async () => {
//       const topCategories: string[] = await axios("/api/categories");
//       setTopCategories(topCategories);
//     };

//     //  פאצ המוצרים
//     const fetchTopProducts = async () => {
//       const topProducts: string[] = await axios("/api/topProducts");
//       setTopProducts(topProducts);
//     };

//     fetchCategories();
//     fetchTopCategories();
//     fetchTopProducts();
//   }, []);

//   const handleCategoryClick = (category: string) => {
//     //    ניהול לחיצה על קטוגוריה
//     // צריך גם להויף פה מעבר לדף הנכון
//     console.log(`Switching to ${category} page...`);
//   };

//   return (
//     <div>
//       <header>
//         <h1>The Store Of Team 3</h1>
//       </header>
//       <main>
//         <div className="category-list">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="category"
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category}
//             </div>
//           ))}
//         </div>

//         <div className="top-five">
//           <h2>Top Five Categories</h2>
//           <ul>
//             {topCategories.map((category, index) => (
//               <li key={index}>{category}</li>
//             ))}
//           </ul>

//           <h2>Top Five Products</h2>
//           <ul>
//             {topProducts.map((product, index) => (
//               <li key={index}>{product}</li>
//             ))}
//           </ul>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomeScreen;

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
