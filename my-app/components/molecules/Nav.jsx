"use client";

// components/molecules/Nav.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavItem from '../atoms/NavItem';

const Nav = () => {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('/dashboardpage');

    useEffect(() => {
        // Set the active item to the current pathname on initial load
        setActiveItem(router.pathname);
    }, [router.pathname]);

    const handleItemClick = (href) => {
        setActiveItem(href);
    };

    return (
        <nav className="w-[250px] text-white">
            <ul className="flex flex-col gap-[5px] list-none">
                <NavItem
                    href="/myaccount"
                    isActive={activeItem === '/myaccount' || router.pathname === '/'}
                    onClick={() => handleItemClick('/myaccount')}
                    className='bg-orange-500'
                >
                    Dashboard
                </NavItem>
                <NavItem
                    href="/order"
                    isActive={activeItem === '/order'}
                    onClick={() => handleItemClick('/order')}
                >
                    Orders
                </NavItem>
                <NavItem
                    href="/download"
                    isActive={activeItem === '/download'}
                    onClick={() => handleItemClick('/download')}
                >
                    Downloads
                </NavItem>
                <NavItem
                    href="/address"
                    isActive={activeItem === '/address'}
                    onClick={() => handleItemClick('/address')}
                >
                    Addresses
                </NavItem>
                <NavItem
                    href="/account"
                    isActive={activeItem === '/account'}
                    onClick={() => handleItemClick('/account')}
                >
                    Account Details
                </NavItem>
                <NavItem
                    href="/login"
                    isActive={activeItem === '/login'}
                    onClick={() => handleItemClick('/login')}
                >
                    Logout
                </NavItem>
            </ul>
        </nav>
    );
};

export default Nav;
