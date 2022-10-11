import React, { useState } from "react";
import Button from "../../atoms/button/button";
import "./navbar.styles.css";
import classnames from "classnames"

import { NAVBAR_MENU_ITEMS } from "../../../utils/contants/app.const";

import Link from "../../atoms/link/link";
import TextLogo from "../../molecules/textLogo/text-logo";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

const Navbar = ({handleSumitContactInfo}) => {
    const [isMenushowing, setIsMenuShowing] = useState(false);
    return (
        <nav className="navbar">
            <Link href="#">
                <div className="navbar-logo">
                    <TextLogo />
                </div>
            </Link>
            <div className="navbar-collapse-button">
                <Button
                    onClick={() => {
                        setIsMenuShowing(!isMenushowing);
                    }}>
                    {isMenushowing ? <BsXLg /> : <BsList />}
                </Button>
            </div>
            <div className={classnames("navbar-menu", { active: isMenushowing })} >
                <ul className="navbar-menu-items">
                    {NAVBAR_MENU_ITEMS.map((item) => {
                        return (
                            <li key={item.id} className="navbar-menu-item">
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        );
                    })}
                    <li>
                        <Button onClick={() => { handleSumitContactInfo() }}>Contact Us</Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;