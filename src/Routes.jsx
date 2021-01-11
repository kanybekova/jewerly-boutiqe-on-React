import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Stocks from "./components/Stocks/Stocks";
import WelcomeImages from "./components/WelcomeImages/WelcomeImages";
import AdminPanel from "./containers/Admin/AdminPanel";
import AdminPanelAdd from "./containers/Admin/AdminPanelAdd";
// import AdminPanelAdd from '../src/containers/Admin/AdminPanelAdd';
import Home from "./containers/Home/Home";
import SignIn from "./containers/SignIn/SingIn";
import SignUp from "./containers/SignUp/SignUp";
import AdminContextProvider from "./contexts/AdminContext";
import AuthContextProvider from "./contexts/AuthContext";
import AdminEdit from "../src/containers/Admin/AdminEdit";
import { history } from "./helpers/history";
import ProductsContextProvider from "./contexts/ProductsContext";
import Body from "./components/Body/Body";
import ProductDetails from "./components/Products/ProductDetails";
import ProductsList from "./components/Products/ProductsList";
import Cart from "./components/Cart/Cart";
import Bracelet from "./components/Category/Bracelet";
import Rigns from "./components/Category/Rigns";
import Necklace from "./components/Category/Necklace";
import Earring from "./components/Category/Earring";
import HeaderSection from "./containers/HeaderSection/HeaderSection";

const Routes = () => {
  return (
    <div>
      <ProductsContextProvider>
        <BrowserRouter history={history}>
          <HeaderSection />
          <Switch>
            <Route exact path="/body" component={Body} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/bracelet" component={Bracelet} />
            <Route exact path="/rings" component={Rigns} />
            <Route exact path="/earrings" component={Earring} />
            <Route exact path="/necklaces" component={Necklace} />
          </Switch>
          <Switch>
            <AuthContextProvider>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
            </AuthContextProvider>
          </Switch>
          <Switch>
            {/* <ProductsContextProvider> */}
            <Route exact path="/details/:id" component={ProductDetails} />
            <Route exact path="/products-list" component={ProductsList} />
            {/* </ProductsContextProvider> */}
          </Switch>
          <Switch>
            <AdminContextProvider>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin-panel-add" component={AdminPanelAdd} />
              <Route exact path="/admin-panel" component={AdminPanel} />
              <Route exact path="/admin-panel-edit" component={AdminEdit} />
            </AdminContextProvider>
          </Switch>
          <Stocks />
          <Footer />
        </BrowserRouter>
      </ProductsContextProvider>
    </div>
  );
};

export default Routes;
