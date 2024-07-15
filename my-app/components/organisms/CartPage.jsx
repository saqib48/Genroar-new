'use client'
import { FaRegTrashCan } from "react-icons/fa6";
import React, { useState } from 'react';
import Container from "@/components/atoms/Container";

const CartPage = () => {

    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Handbag Fringilla', price: 65.00, quantity: 1, total: 130.00, img: '/assits/images/pro3.jpg' },
        { id: 2, name: 'Handbags Justo', price: 90.00, quantity: 1, total: 180.00, img: '/assits/images/pro2.jpg' },
        { id: 3, name: 'Handbag Elit', price: 80.00, quantity: 1, total: 160.00, img: '/assits/images/pro1.jpg' },
    ]);

    const handleQuantityChange = (id, quantity) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity, total: item.price * quantity } : item
        );
        setCartItems(updatedCartItems);
    };

    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    return (
        <Container>
            <div className="container mt-[50px]">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr >
                            <th className="py-4 border-b-[4px] border-[#ff6a28] text-gray-500 bg-[#f5f5f5]">DELETE</th>
                            <th className="py-4 border-b-[4px] border-[#ff6a28] text-gray-500 bg-[#f5f5f5]">IMAGE</th>
                            <th className="py-4 border-b-[4px] border-[#ff6a28] text-gray-500 bg-[#f5f5f5]">PRODUCT</th>
                            <th className="py-4 border-b-[4px] border-[#ff6a28] text-gray-500 bg-[#f5f5f5]">PRICE</th>
                            <th className="py-4 border-b-[4px] border-[#ff6a28] text-gray-500 bg-[#f5f5f5]">QUANTITY</th>
                            <th className="py-4 border-b-[4px] border-[#ff6a28] text-gray-500 bg-[#f5f5f5]">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id} className="border-t border-gray-300 ">
                                <td className="py-2 text-center border border-gray-300 py-[50px]">
                                    <button onClick={() => handleRemoveItem(item.id)} className="text-xl text-red-500">< FaRegTrashCan /></button>
                                </td>
                                <td className="py-2 text-center border border-gray-300">
                                    <div className="flex items-center justify-center "><img src="/assits/images/pro3.jpg" alt="" /></div>
                                </td>
                                <td className="py-2 text-center border border-gray-300">{item.name}</td>
                                <td className="py-2 text-center text-orange-600 border border-gray-300">£{item.price.toFixed(2)}</td>
                                <td className="py-2 text-center border border-gray-300">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                        className="w-[60px] p-[5px] text-center border border-gray-300 rounded outline-none"
                                    />
                                </td>
                                <td className="py-2 text-center border border-gray-300">£{item.total.toFixed(2)}</td>
                            </tr>

                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="border-t border-gray-300">
                            <td colSpan="6" className="px-2 text-right">
                                <button className=" my-4 bg-black text-white text-[12px] font-[600] py-3 px-3 hover:bg-[#ff6a28] transition 0.5s ease-in ">UPDATE CART</button>

                            </td>
                        </tr>
                    </tfoot>
                </table>
                <div className=""></div>
                <div className=""></div>
            </div>
        </Container>
    );
};

export default CartPage; 