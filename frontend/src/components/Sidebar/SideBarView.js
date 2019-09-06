import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { styles } from './styles';

export const SideBarView = ({}) => {
    return (
        <Fragment>
            <button className={classNames('kt-aside-close')} id="kt_aside_close_btn">
                <i className={classNames('la la-close')}></i>
            </button>
            <div className={classNames('kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop')}>
                <div className={classNames("kt-aside__brand kt-grid__item")} id="kt_aside_brand">
                    <div className={classNames("kt-aside__brand-logo")}>
                        <a href="javascript:;" className={classNames("kt-menu__link")} style={{fontSize: '25px'}}>
                            <i className={classNames("kt-menu__link-icon flaticon2-soft-icons")}></i>
                        </a>
                    </div>
                </div>
                <div className={classNames("kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid")} id="kt_aside_menu_wrapper">
                    <div id="kt_aside_menu" className={classNames("kt-aside-menu kt-aside-menu--dropdown")}>		
                        <ul className={styles.menuNav}>
                            <li className={classNames(styles.menuNavItem, styles.menuNavItemActive, "active kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here")}>
                                <a href="javascript:;" className={classNames("kt-menu__link")}>
                                    <i className={classNames(styles.menuNavItemIcon, "active flaticon-home")}></i>
                                </a>
                            </li>
                            <li className={classNames(styles.menuNavItem, styles.menuNavItemActive, "kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here")}>
                                <a href="javascript:;" className="kt-menu__link">
                                    <i className={classNames(styles.menuNavItemIcon, "flaticon-squares-4")}></i>
                                </a>
                            </li>
                            <li className={classNames(styles.menuNavItem, styles.menuNavItemActive, "kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here")}>
                                <a  href="javascript:;" className="kt-menu__link">
                                    <i className={classNames(styles.menuNavItemIcon, "flaticon-file-1")}></i>
                                </a>
                            </li>
                            <li className={classNames(styles.menuNavItem, styles.menuNavItemActive, "kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here")}>
                                <a href="javascript:;" className="kt-menu__link">
                                    <i className={classNames(styles.menuNavItemIcon, "kt-menu__link-icon flaticon-user")}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="kt-aside-menu-overlay"></div>
        </Fragment>
    );
};

SideBarView.propTypes = {

}