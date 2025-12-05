import React from "react";
import Hero from "./(components)/Hero";
import { TrustedBrands } from "./(components)/TrustedBrands";
import NewArrivals from "./(components)/NewArrivals";
import PopularProducts from "./(components)/PopularProducts";
import Banner from "./(components)/Banner";

function page() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <NewArrivals />
      <PopularProducts />
      <Banner />
    </>
  )
}

export default page