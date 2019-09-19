import React, { Fragment, Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
    IoIosList, 
    IoIosStats, 
    IoIosHome,
    IoIosPin,
    IoIosCopy,
    IoIosContacts
} from 'react-icons/io';

class SideBarView extends Component {
    render() {
        const { menu } = this.props;
        
        return (
            <Fragment>
                <button className='kt-aside-close' id="kt_aside_close_btn">
                    <i className='la la-close'></i>
                </button>
                <div className='kt-aside kt-aside--fixed kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop'>
                    <div className="kt-aside__brand kt-grid__item" id="kt_aside_brand">
                        <div className="kt-aside__brand-logo">
                            <Link to="/" className="kt-menu__link" style={{fontSize: '30px', color: '#000'}}>
                                <IoIosList />
                            </Link>
                        </div>
                    </div>
                    <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
                        <div id="kt_aside_menu" className="kt-aside-menu kt-aside-menu--dropdown">		
                            <ul className="kt-menu__nav">
                                <li className={classnames(menu.home === true ? 'active' : '', "kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here")}>
                                    <Link to="/home/dashboard" className="kt-menu__link">
                                        <IoIosHome className={classnames(menu.home === true ? 'active' : '', "kt-menu__link-icon")} />
                                    </Link>
                                </li>
                                <li style={{fontSize: '15px'}} className="kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here">
                                    <Link to="/" className="kt-menu__link">
                                        <IoIosStats className="kt-menu__link-icon" />
                                    </Link>
                                </li>
                                <li className="kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here">
                                    <Link to="/" className="kt-menu__link">
                                        <IoIosPin className="kt-menu__link-icon" />
                                    </Link>
                                </li>
                                <li className="kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here">
                                    <Link to="/" className="kt-menu__link" >
                                        <IoIosCopy className="kt-menu__link-icon"/>
                                    </Link>
                                </li>
                                <li className={classnames(menu.users === true ? 'active' : '', "kt-menu__item kt-menu__item--submenu kt-menu__item--submenu-fullheight kt-menu__item--open kt-menu__item--here")}>
                                    <Link to="/home/users" className="kt-menu__link">
                                        <IoIosContacts className={classnames(menu.users === true ? 'active' : '', "kt-menu__link-icon")} />
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
};

SideBarView.propTypes = {
    menu: PropTypes.object.isRequired
};

export default SideBarView;