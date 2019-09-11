import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RoomCard = ({ title, image, users }) => {
    return (
        <Fragment>
            <div className="col-md-4">
                <div className="col-md-12 room-col">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={image} className="card-img-top" alt="" />
                            </div>
                            <div className="col-md-8 background-content card-body">
                                <p>{title}</p>
                                <p>
                                    <Link to="#" className="kt-menu__link icon-link mr-1">
                                        <i className="kt-menu__link-icon flaticon-home"></i>
                                    </Link>
                                    <Link to="#" className="kt-menu__link icon-link mr-1">
                                        <i className="kt-menu__link-icon flaticon-home"></i>
                                    </Link>
                                    <Link to="#" className="kt-menu__link icon-link mr-1">
                                        <i className="kt-menu__link-icon flaticon-home"></i>
                                    </Link>
                                    <Link to="#" className="kt-menu__link icon-link mr-1">
                                        <i className="kt-menu__link-icon flaticon-home"></i>
                                    </Link>
                                    <Link to="#" className="kt-menu__link icon-link mr-1">
                                        <i className="kt-menu__link-icon flaticon-home"></i>
                                    </Link>
                                </p>
                                <p>
                                    <Link to="#" className="kt-menu__link user-link">
                                        <i class="kt-menu__link-icon flaticon-home"></i> Fits 7 persons
                                    </Link>
                                </p>
                                <button className="btn btn-sm btn-default">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

RoomCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};