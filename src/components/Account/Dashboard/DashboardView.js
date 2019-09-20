import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LayoutView from '../Layout/LayoutView';
import {  Breadcrumps } from '../../Reuse/Breadcrumps';
import { ContentContainer } from '../../Reuse/ContentContainer';
import { RoomCard } from '../../Reuse/RoomCard';
import Room1 from '../../../assets/images/room-1.png';
import Room2 from '../../../assets/images/room-2.png';

class DashboardView extends Component {
    componentDidMount() {
        const { toggleMenu } = this.props;
        toggleMenu({
            key: 'home',
            value: true
        });
    };

    render() {
        return (
            <LayoutView>
                <Breadcrumps title="Home" />
                <ContentContainer>
                    <div className="row first" style={{marginBottom: '40px'}}>
                        <div className="col">Date</div>
                        <div className="col">Time</div>
                        <div className="col">Duration</div>
                        <div className="col active">Find Room</div>
                    </div>

                    <h4>Currently Available Rooms</h4>
                    <div className="row room" style={{marginBottom: '40px'}}>
                        <RoomCard title="Board Room Lounge VIP" image={Room1} />
                        <RoomCard title="Computer Science Annex" image={Room2} />
                        <RoomCard title="Daylight Room Lounge" image={Room1} />
                    </div>
                </ContentContainer>
            </LayoutView>
        );
    };
};

DashboardView.propTypes = {
    toggleMenu: PropTypes.func.isRequired
};

export default DashboardView;