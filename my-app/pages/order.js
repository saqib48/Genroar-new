"use client";

import Headermain from "@/components/organisms/Headermain";
import AccountData from "@/components/organisms/AccountData";
import OrderPage from '@/components/molecules/OrderPage';
import Footer from "@/components/organisms/Footer";

import React from 'react';

function Order() {
  return (
    <div>
      <Headermain />
      <AccountData />
      <OrderPage />
      <Footer />
    </div>
  );
}

export default Order;
