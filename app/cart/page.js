import React from "react";
import IntroSection from "../../components/IntroSection";
import MyCart from "../../components/MyCart";

export default function page() {
  return (
    <div>
      <IntroSection title="Cart" />
      <MyCart />
    </div>
  );
}
