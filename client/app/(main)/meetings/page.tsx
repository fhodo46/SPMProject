'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const page = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <h5>Meetings</h5>
                <div>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView={'dayGridMonth'}
                        headerToolbar={{ start: 'prev, next today', center: 'title', end: 'resourcesTimelineWook,dayGridMonth, timeGridWeek' }}
                        events={{}}
                        nowIndicator={true}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        selectMirror={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
