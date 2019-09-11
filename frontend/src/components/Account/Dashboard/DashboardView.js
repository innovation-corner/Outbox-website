import React, { Component, Fragment } from 'react';
import className from 'classnames';
import { LayoutView } from '../Layout/LayoutView';
import {  Breadcrumps } from '../../Reuse/Breadcrumps';
import { ContentContainer } from '../../Reuse/ContentContainer';
import { RoomCard } from '../../Reuse/RoomCard';
import Room1 from '../../../assets/images/room-1.png';

class DashboardView extends Component {
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
                    </div>
                </ContentContainer>
            </LayoutView>
        );
    };
};

export default DashboardView;