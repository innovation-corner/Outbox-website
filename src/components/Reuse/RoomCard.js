import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
    IoIosPerson, IoIosHome, IoIosFunnel, IoIosShuffle, IoIosTv, IoIosCall, IoIosPrint
} from 'react-icons/io';

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '10px'
    },
    cardContent: {
        padding: '10px'
    },
    iconLink: {
        padding: '3px',
        borderRadius: '30%',
        border: '1px solid #ccc',
        color: '#ccc',
        fontSize: '18px',
        width: '30px',
        display: 'inline-block',
        textAlign: 'center'
    },
    userLink: {
        color: '#ccc',
        fontSize: '14px'
    },
    contentP: {
        fontWeight: '600',
        fontSize: '16px',
        color: '#191B3F',
        marginBottom: '20px'
    }, 
    innerP: {
        marginTop: '10px',
        fontSize: '14px'
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        width: '120px',
        border: '1px solid #7540EE',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#7540EE',
            color: '#fff'
        }
    }
};

export const RoomCard = ({ title, image, users }) => {
    return (
        <Fragment>
            <div className="col-md-4">
                <div className={classNames("col-md-12 room-col", styles.cardContainer)}>
                    <div style={styles.card}>
                        <div className="row">
                            <div className="col-md-5">
                                <img src={image} className="card-img-top" alt="" />
                            </div>
                            <div className="col-md-7 card-body" style={styles.cardContent}>
                                <p style={styles.contentP}>{title}</p>
                                <Link to="#" className="kt-menu__link mr-2" style={styles.iconLink}><IoIosFunnel /></Link>
                                <Link to="#" className="kt-menu__link mr-2" style={styles.iconLink}><IoIosShuffle /></Link>
                                <Link to="#" className="kt-menu__link mr-1" style={styles.iconLink}><IoIosTv /></Link>
                                <Link to="#" className="kt-menu__link mr-1" style={styles.iconLink}><IoIosCall /></Link>
                                <Link to="#" className="kt-menu__link mr-1" style={styles.iconLink}><IoIosPrint /></Link>
                                <p style={styles.innerP}>
                                    <Link to="#" className="kt-menu__link" style={styles.userLink}>
                                        <IoIosPerson /> Fits 7 persons
                                    </Link>
                                </p>
                                <button className="btn btn-sm btn-default" style={styles.button}>Book Now</button>
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