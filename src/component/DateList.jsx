import React, { useState } from 'react'

function DateList({ groupedData, setSelectedDate, selectedDate }) {
  const [numSlot, setNumSlot] = useState(8);

  const handleClick = (slot) => {
    setSelectedDate(slot);
  }

  const loadMore = () => {
    setNumSlot(prev => prev + 5);
  }

  return (
    <div className='show_date'>
      {groupedData && Object.keys(groupedData)?.map((slot, index) => {
        if (index > numSlot) {
          return null
        }
        return <button key={slot} onClick={() => handleClick(slot)} className={`${slot === selectedDate ? 'selected_btn date_btn' : 'date_btn'} `}>{slot}</button>
      })}
      <button onClick={loadMore}>...</button>
    </div>
  )
}

export default DateList