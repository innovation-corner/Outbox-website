import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { Link } from 'react-router-dom';
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';
import { 
    IoIosNotificationsOutline, 
    IoIosSearch,
    IoIosArrowDown
} from 'react-icons/io';
import Logo from '../../assets/images/logo-1.png';
import User from '../../assets/images/user.png';
import { styles } from './styles';

class TopBarView extends Component {
    render() {
        const { userData, logout } = this.props;
        return (
            <Fragment>
                <div id="kt_header" className="kt-header kt-grid kt-grid--ver  kt-header--fixed " >
                    <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn">
                        <i className="la la-close"></i>
                    </button>
                    <div className="kt-header-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_header_menu_wrapper">
                        <div id="kt_header_menu" className="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-">
                            <ul className="kt-menu__nav">
                                <li className="kt-menu__item logo">
                                    <Link to="#" className="kt-menu__link ">
                                        <span className="kt-menu__link-text">
                                            <img alt="Logo" src={Logo} />
                                        </span>
                                    </Link>
                                </li>
                                <li classNmae="kt-menu__item">
                                    <div className="kt-quick-search" id="kt_quick_search_default">
                                        <form className="kt-quick-search__form" style={{backgroundColor: 'unset', fontSize: '15px'}}>
                                            <div className="input-group" >
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{fontSize: '18px'}}>
                                                        <IoIosSearch />
                                                    </span>
                                                </div>
                                                <input type="text" style={{fontSize: '18px'}} className="form-control kt-quick-search__input" placeholder="Search..." />
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><i className="la la-close kt-quick-search__close"></i></span>
                                                </div>
                                            </div>
                                        </form>
                                        <div id="kt_quick_search_toggle"></div>
                                        <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg">
                                            <div className="kt-quick-search__wrapper kt-scroll"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="kt-header__topbar">
                        <div className="kt-header__topbar-item dropdown">
                            <div className="kt-header__topbar-wrapper" style={{backgroundColor: '#fff', color: '#000'}}>
                                <span className="kt-header__topbar-icon kt-header__topbar-icon--success" style={{fontSize: '20px', backgroundColor: '#fff',}}>
                                    <IoIosNotificationsOutline />
                                </span>
                                <span className="kt-hidden kt-badge kt-badge--danger"></span>
                            </div>
                        </div>
                        <div className="kt-header__topbar-item">
                            <div className="kt-header__topbar-wrapper" style={{backgroundColor: '#fff', color: '#000', fontSize: '15px'}}>
                                <span className="kt-header__topbar-icon kt-header__topbar-icon--success" style={{backgroundColor: '#fff', color: '#000', width: 'auto'}}>{`${userData.firstName} ${userData.lastName}`}</span>
                                <span className="kt-hidden kt-badge kt-badge--danger"></span>
                            </div>
                        </div>
                        <div className="kt-header__topbar-item kt-header__topbar-item--user">
                            <div className="kt-header__topbar-wrapper">	
                                <span className="kt-hidden kt-header__topbar-welcome">Hi,</span>
                                <span className="kt-hidden kt-header__topbar-username">{`${userData.firstName}`}</span>
                                <img className="" alt="profile-pic" src={User}/>
                                <span className="kt-header__topbar-icon" style={{backgroundColor: '#fff', color: '#000'}}>
                                    <Nav className="ml-auto" navbar>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav><IoIosArrowDown /></DropdownToggle>
                                            <DropdownMenu style={{marginTop: '160px', marginRight: '90px'}}>
                                                <DropdownItem>My Profile</DropdownItem>
                                                <DropdownItem>Settings</DropdownItem>
                                                <DropdownItem>Password Reset</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </Nav>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
};

TopBarView.propTypes = {

};

const mapStateToProps = state => ({
    userData: state.auth.userData
});

const mapStateToDispatch = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapStateToDispatch)(TopBarView);

