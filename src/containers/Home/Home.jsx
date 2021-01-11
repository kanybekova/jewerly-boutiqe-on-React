import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import Body from "../../components/Body/Body";
import CategorySection from "../../components/CategorySection/CategorySection";
import Description from "../../components/Description/Description";
import Header from "../../components/Header/Header";
import WelcomeImages from "../../components/WelcomeImages/WelcomeImages";
import HeaderSection from "../HeaderSection/HeaderSection";
import ContactSection from "../../components/ContactSection/ContactSection";

const Home = () => {
  return (
    <Grid>
      <WelcomeImages />
      <Description />
      <Body />
      <CategorySection />
      <ContactSection/>
    </Grid>
  );
};

export default Home;
