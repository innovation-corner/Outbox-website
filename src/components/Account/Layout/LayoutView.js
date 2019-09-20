import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/authActions';
import TopBarView from './TopBarView';
import SideBarView from './SideBarView';
import '../../../assets/css/generic.css';
import '../../../assets/css/style.bundle.css';

class LayoutView extends Component {
    render() {
        const { children, userData, logout, menuItem } = this.props;

        return (
            <Fragment>
                <div className='kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-aside--minimize kt-page--loading'>
                    <div id="kt_header_mobile" className='kt-header-mobile kt-header-mobile--fixed'>
                        <div className='kt-header-mobile__logo'>
                            <Link to="#"><img alt="Logo" src=""/></Link>
                        </div>
                        <div className="kt-header-mobile__toolbar">
                            <button className='kt-header-mobile__toolbar-toggler kt-header-mobile__toolbar-toggler--left' id="kt_aside_mobile_toggler"><span></span></button>
                            <button className='kt-header-mobile__toolbar-toggler' id="kt_header_mobile_toggler"><span></span></button>
                            <button className='kt-header-mobile__toolbar-topbar-toggler' id="kt_header_mobile_topbar_toggler">
                                <i className='flaticon-more'></i>
                            </button>
                        </div>
                    </div>
                    <div className="kt-grid kt-grid--hor kt-grid--root">
                        <div className='kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page'>
                            <SideBarView menu={menuItem} />
                        </div>
                        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                            <TopBarView userData={userData} logout={() => logout()}/>

                            <div className="kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content" style={{backgroundColor: '#fff'}}>
                                {children}
                            </div>
                            <div className="kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop" id="kt_footer">
                                <div className="kt-container kt-container--fluid ">
                                    <div className="kt-footer__copyright">
                                        2019&nbsp;&copy;&nbsp;<Link to="#" target="_blank" className="kt-link">Outbox. All Rights Reserved.</Link>
                                    </div>
                                    <div className="kt-footer__menu">
                                        <Link to="#" target="_blank" className="kt-footer__menu-link kt-link">About</Link>
                                        <Link to="#" target="_blank" className="kt-footer__menu-link kt-link">Documentation</Link>
                                        <Link to="#" target="_blank" className="kt-footer__menu-link kt-link">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    menuItem: state.alert.activeMenu,
    userData: state.auth.userData,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutView);