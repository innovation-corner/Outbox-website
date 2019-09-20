import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { 
    FaEllipsisV, FaMapMarkerAlt, FaStoreAlt
} from 'react-icons/fa';
import User2 from '../../assets/images/user-2.png';

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
    cardTitle: {
        padding: '20px',
        borderBottom: '1px solid #ccc',
        fontSize: '17px'
    },
    cardBody: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    inner: {
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        marginBottom: '20px'
    },
    cardParagraph: {
        fontSize: '14px'
    },
    innerIcon: {
        width: '15%',
        fontSize: '16px',
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

class LocationCard extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
      
    render() {
        return (
            <Fragment>
                <div className="col-md-3">
                    <div className={classNames("col-md-12 room-col", styles.cardContainer)}>
                        <div style={styles.card}>
                            <Card style={{padding: '0px'}} body>
                                <div style={styles.cardTitle}>
                                    <span >Special Title Treatment</span>
                                    <Dropdown className="pull-right" group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
                                        <DropdownToggle style={{backgroundColor: 'unset', border: '0px', color: '#ccc'}}>
                                        <FaEllipsisV />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Edit Location</DropdownItem>
                                            <DropdownItem>Delete Location</DropdownItem>
                                            <DropdownItem>Reschedule</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    
                                </div>
                                <div style={styles.cardBody}>
                                    <div style={styles.inner}>
                                        <p style={styles.innerIcon}><FaMapMarkerAlt />{" "}</p>
                                        <p style={styles.cardParagraph}>Lagos 12 Ibadan Express way, Lagos Nigeria</p>
                                    </div>
                                    <div style={styles.inner}>
                                        <p style={styles.innerIcon}><FaStoreAlt /> {" "}</p>
                                        <p style={styles.cardParagraph}>12 Meeting Rooms</p>
                                    </div>
                                    <div style={styles.inner}>
                                        <p style={styles.innerIcon}>
                                            <img src={User2} />
                                        </p>
                                        <p style={styles.cardParagraph}>Jammie Lannister</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
};

LocationCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
};

export default LocationCard;