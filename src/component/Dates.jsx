import React, { useEffect, useMemo, useState } from 'react'
import DateList from './DateList';
import TimeList from './TimeList';

const options = { weekday: 'short', month: 'short', day: 'numeric' };

function Dates({ dateSlots }) {
    const [selectedDate, setSelectedDate] = useState();

    const groupedData = useMemo(() => dateSlots?.reduce((acc, date) => {
        const day = new Date(date.date).toLocaleDateString(undefined, options);
        if (!acc[day]) {
            acc[day] = [];
        }
        acc[day].push(date);

        return acc;
    }, {}), [dateSlots])

    useEffect(() => {
        if (groupedData) {
            setSelectedDate(Object.keys(groupedData)[0]);
        }
    }, [groupedData])

    return (
        <div>
            <p className='text'>Select Date</p>
            <DateList groupedData={groupedData} setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            <p className='text'>Select Time Slot <span className='slot_avai'>{groupedData?.[selectedDate]?.length} Slots available</span></p>
            <TimeList timeSlots={groupedData?.[selectedDate]} />
        </div>
    )
}

export default Dates;