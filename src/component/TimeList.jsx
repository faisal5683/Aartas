import React from 'react'
import { timeConverter } from './dateUtils';

function TimeList({ timeSlots }) {

    return (
        <div className='show_time'>
            {timeSlots?.map(slot => {
                return <button key={slot.id} className='time_btn'>{timeConverter(slot.time_from)}</button>
            })}
        </div>
    )
}

export default TimeList;