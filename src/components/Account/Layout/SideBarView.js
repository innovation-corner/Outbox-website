import React, { Fragment, Component } from 'react';
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
import NavBarItem from '../../Reuse/NavBarItem';

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
                                <NavBarItem 
                                    link="/home/dashboard"
                                    name="home"
                                    IconName={IoIosHome}
                                    menu={menu}
                                />
                                <NavBarItem 
                                    link="/"
                                    name=""
                                    IconName={IoIosStats}
                                    menu={menu}
                                />
                                <NavBarItem 
                                    link="/"
                                    name=""
                                    IconName={IoIosPin}
                                    menu={menu}
                                />
                                <NavBarItem 
                                    link="/"
                                    name=""
                                    IconName={IoIosCopy}
                                    menu={menu}
                                />
                                <NavBarItem 
                                    link="/home/users"
                                    name="users"
                                    IconName={IoIosContacts}
                                    menu={menu}
                                />
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