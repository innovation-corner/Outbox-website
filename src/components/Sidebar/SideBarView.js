import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { 
    IoIosList, 
    IoIosStats, 
    IoIosHome,
    IoIosPin,
    IoIosCopy,
    IoIosContacts
} from 'react-icons/io';
import PropTypes from 'prop-types';
import { styles } from './styles';

export const SideBarView = ({}) => {
    return (
        <Fragment>
            <button className='kt-aside-close' id="kt_aside_close_btn">
                <i className='la la-close'></i>
            </button>
            <div className='kt-aside kt-aside--fixed kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop'>
                <div className="kt-aside__brand kt-grid__item" id="kt_aside_brand">
                    <div className="kt-aside__brand-logo">
                        <Link to="#" className="kt-menu__link" style={{fontSize: '30px', color: '#000'}}>
                            <IoIosList />
                        </Link>
                    </div>
                </div>
                <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
                    <div id="kt_aside_menu" className="kt-aside-menu kt-aside-menu--dropdown">		
                        <ul className="kt-menu__nav">
                            <li className="kt-menu__item active kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here">
                                <Link to="javascript:;" className="kt-menu__link">
                                    <IoIosHome className="kt-menu__link-icon active" style={{fontSize: '15px'}}/>
                                </Link>
                            </li>
                            <li style={{fontSize: '15px'}} className="kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here">
                                <Link to="javascript:;" className="kt-menu__link" style={{fontSize: '15px'}}>
                                    <IoIosStats className="kt-menu__link-icon" />
                                </Link>
                            </li>
                            <li className="kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here">
                                <Link to="javascript:;" className="kt-menu__link">
                                    <IoIosPin className="kt-menu__link-icon" />
                                </Link>
                            </li>
                            <li className="kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here">
                                <Link to="javascript:;" className="kt-menu__link" >
                                    <IoIosCopy className="kt-menu__link-icon" style={{fontSize: '15px'}}/>
                                </Link>
                            </li>
                            <li className="kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here">
                                <Link to="/users" className="kt-menu__link">
                                    <IoIosContacts className="kt-menu__link-icon" />
                                </Link>
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