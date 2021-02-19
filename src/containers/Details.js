import React from 'react'
import Detail from '../components/Details'

function Details({data,selectedIndex,setEvrekaData}) {
    return (
        <div className="detail-wrapper">
            <span className="header">Event Details</span>

            <Detail data={data} selectedIndex={selectedIndex} setEvrekaData={setEvrekaData} />
        </div>
    )
}

export default Details
