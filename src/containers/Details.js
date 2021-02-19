import React from 'react'
import Detail from '../components/Details'

function Details({data,locationData,mediaData}) {
    return (
        <div style={{width:'40%'}}>
            <span style={{ fontSize: 23, color: '#172C49', textTransform: 'uppercase', paddingTop: 80, paddingBottom: 20, paddingLeft: 20, fontWeight: 'bold', display: 'block' }}>Event Details</span>

            <Detail data={data} locationData={locationData} mediaData={mediaData} />
        </div>
    )
}

export default Details
