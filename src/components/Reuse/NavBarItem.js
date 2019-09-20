import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const NavBarItem = ({menu, name, IconName, link}) => {
    let key = Object.keys(menu);
    let menuName = key[0];
    let value = Object.values(menu);
    let menuValue = value[0];

    return (
        <Fragment>
            <li className={classnames(menuName === name && menuValue === true ? 'active' : '', "kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here")}>
                <Link to={link} className="kt-menu__link">
                    <IconName className={classnames(menuName === name && menuValue === true ? 'active' : '', "kt-menu__link-icon")} />
                </Link>
            </li>
        </Fragment>
    );
};

export default NavBarItem;