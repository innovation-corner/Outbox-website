import React, { Fragment, Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TopBarView } from '../../TopBar/TopBarView';
import { SideBarView } from '../../Sidebar/SideBarView';
import { styles } from './styles';
import '../../../assets/css/style.bundle.css';
import '../../../assets/css/generic.css';

export class LayoutView extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "../../../assets/js/scripts.bundle.js";
        script.async = true;
        // script.onload = () => this.scriptLoaded();

        document.body.appendChild(script);
    };

    render() {
        const { children } = this.props;

        return (
            <Fragment>
                <div className={classNames(styles.layoutContainer, 'kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-aside--minimize kt-page--loading')}>
                    <div id="kt_header_mobile" className={classNames('kt-header-mobile  kt-header-mobile--fixed')} >
                        <div className={classNames('kt-header-mobile__logo')}>
                            <Link to="#"><img alt="Logo" src=""/></Link>
                        </div>
                        <div className={classNames('kt-header-mobile__toolbar')}>
                            <button className={classNames('kt-header-mobile__toolbar-toggler kt-header-mobile__toolbar-toggler--left')} id="kt_aside_mobile_toggler"><span></span></button>
                            <button className={classNames('kt-header-mobile__toolbar-toggler')} id="kt_header_mobile_toggler"><span></span></button>
                            <button className={classNames('kt-header-mobile__toolbar-topbar-toggler')} id="kt_header_mobile_topbar_toggler">
                                <i className={classNames('flaticon-more')}></i>
                            </button>
                        </div>
                    </div>
                    <div className={classNames('kt-grid kt-grid--hor kt-grid--root')}>
                        <div className={classNames('kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page')}>
                            <SideBarView />
                        </div>

                        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                            <TopBarView />
                        </div>

                        <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content" style={{backgroundColor: '#fff'}}>
                            <main>
                                <div>
                                    {children}
                                </div>
                            </main>

                            <div className="kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop" id="kt_footer">
                                <div className="kt-container  kt-container--fluid ">
                                    <div className="kt-footer__copyright">
                                        2019&nbsp;&copy;&nbsp;<a href="#" target="_blank" className="kt-link">Outbox. All Rights Reserved.</a>
                                    </div>
                                    <div className="kt-footer__menu">
                                        <a href="#" target="_blank" className="kt-footer__menu-link kt-link">About</a>
                                        <a href="#" target="_blank" className="kt-footer__menu-link kt-link">Documentation</a>
                                        <a href="#" target="_blank" className="kt-footer__menu-link kt-link">Contact</a>
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

LayoutView.propTypes = {

};