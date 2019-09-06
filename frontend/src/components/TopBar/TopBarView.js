import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

export const TopBarView = ({}) => {
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
                                <a href="index.html" className="kt-menu__link ">
                                    <span className="kt-menu__link-text">
                                        <img alt="Logo" src=""/>
                                    </span>
                                </a>
                            </li>
                            <li classNmae="kt-menu__item">
                                <a className="kt-menu__link">
                                    <div className="kt-quick-search" id="kt_quick_search_default">
                                        <form className="kt-quick-search__form" style={{backgroundColor: 'unset'}}>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="flaticon2-search-1"></i></span>
                                                </div>
                                                <input type="text" className="form-control kt-quick-search__input" placeholder="Search..." />
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
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

TopBarView.propTypes = {

}