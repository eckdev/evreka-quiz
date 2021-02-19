import React, { useState } from 'react'
import Table from '../components/Table'
import Details from './Details';

function Events({ data }) {
    const [isDetailsActive, setIsDetailsActive] = useState(false)
    const [selectedIndex, setselectedIndex] = useState(null)
    const [evrekaData, setEvrekaData] = useState(data)

    return (
        <>
            <div className="table-wrapper">
                <span className="header">Events</span>
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
