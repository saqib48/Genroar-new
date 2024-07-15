"use client";

import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination } from 'antd';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";
import "../../app/globals.css";
import ShopProduct from '../molecules/ShopProduct';
import products from './Products';
import Heading from '../atoms/Heading';

const Shop1 = () => {
    const [layout, setLayout] = useState('grid3');
    const [columns, setColumns] = useState(3);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return null; // or a loading indicator
    }

    const handleGridClick = (value) => {
        setLayout(value);
        switch (value) {
            case 'grid3':
                setColumns(3);
                break;
            case 'grid4':
                setColumns(4);
                break;
            case 'grid5':
                setColumns(5);
                break;
            case 'list':
                setColumns(1);
                break;
            default:
                break;
        }
    };

    const getColSpan = () => {
        return layout === 'list' ? 24 : 24 / columns;
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedProducts = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div>
            <div className="grid fl mb-[40px] w-[100%] h-[60px] border px-[15px] mt-[16px] flex items-center justify-between ">
                <div className="right w-[20%] gap-[15px] flex justify-between">
                    <a href="#" onClick={() => handleGridClick('grid3')}><BsGrid3X3GapFill className='w-[20px] h-[20px] text-gray-200 hover:text-gray-600 duration-300' /></a>
                    <a href="#" onClick={() => handleGridClick('grid4')}><TfiLayoutGrid4Alt className='w-[20px] h-[20px] text-gray-200 hover:text-gray-600 duration-300' /></a>
                    <a href="#" onClick={() => handleGridClick('grid5')}><TfiLayoutGrid4Alt className='w-[20px] h-[20px] text-gray-200 hover:text-gray-600 duration-300' /></a>
                    <a href="#" onClick={() => handleGridClick('list')}><FaBars className='w-[20px] h-[20px] text-gray-200 hover:text-gray-600 duration-300' /></a>
                </div>
                <select className='mid border py-[8px] text-[#747474] px-[8px] outline-none rounded-[5px] text-[15px] font-medium'>
                    <option value="">Sort by average rating</option>
                    <option value="">Sort by popularity</option>
                    <option value="">Sort by newness</option>
                    <option value="">Sort by price: low to high</option>
                    <option value="">Sort by price: high to low</option>
                    <option value="">Product Name: Z</option>
                </select>
                <Heading level='7'>Showing 1–9 of 21 results</Heading>
            </div>
            <Row gutter={[16, 16]}>
                {paginatedProducts.map((product, index) => (
                    <Col key={index} span={getColSpan()}>
                        <ShopProduct {...product} />
                    </Col>
                ))}
            </Row>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={products.length}
                onChange={handlePageChange}
                style={{ marginTop: '20px', textAlign: 'center' }}
            />
        </div>
    );
};

export default Shop1;
