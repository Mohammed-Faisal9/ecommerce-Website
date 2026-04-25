import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import MyCart from "../../features/cart/components/MyCart";

export default function page() {
  return (
    <div>
      <BreadCrumb title="Cart" />
      <MyCart />
    </div>
  );
}
