import React, { useState } from 'react'
import Table from '../components/Table'
import Details from './Details';

function Events({ data }) {
    const [isDetailsActive, setIsDetailsActive] = useState(false)
    const [selectedIndex, setselectedIndex] = useState(null)
    const [evrekaData, setEvrekaData] = useState(data)

    return (
        <>
            <div style={{ width: '60%' }}>
                <span style={{ fontSize: 23, color: '#172C49', textTransform: 'uppercase', paddingTop: 80, paddingBottom: 20, paddingLeft: 20, fontWeight: 'bold', display: 'block' }}>Events</span>
                {
                    evrekaData.map((result, index) => (
                        <Table
                            cardData={result.details}
                            key={index}
                            setIsDetailsActive={setIsDetailsActive}
                            setselectedIndex={setselectedIndex}
                            selectedIndex={selectedIndex}
                            index={index} />
                    ))
                }
            </div>

            {isDetailsActive && <Details
                data={evrekaData}
                selectedIndex={selectedIndex}
                setEvrekaData={setEvrekaData}
            />}
        </>
    )
}

export default Events
