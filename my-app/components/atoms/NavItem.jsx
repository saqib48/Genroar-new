// components/atoms/NavItem.js
import Link from 'next/link';

const NavItem = ({ href, children, isActive, onClick }) => {
    return (
        <li
            className={`py-[8px] pl-[8px] pr-[60px] cursor-pointer rounded-[4px] ${isActive ? 'bg-orange-500' : 'bg-[rgb(36,36,36)]'} hover:bg-orange-500`}
            onClick={onClick}
        >
            <Link href={href} legacyBehavior>
                <a className="block text-white">{children}</a>
            </Link>
        </li>
    );
};

export default NavItem;
