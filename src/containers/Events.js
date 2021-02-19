import React from 'react'
import Table from '../components/Table'

function Events({data}) {
    return (
        <div style={{width:'60%'}}>
        <span style={{fontSize:23,color:'#172C49',textTransform:'uppercase',paddingTop:80,paddingBottom:20,paddingLeft:20,fontWeight:'bold',display:'block'}}>Events</span>
        {
            data.map((result,index) => (
                <Table cardData={result.details} key={index} />
            ))
        }
        </div>
    )
}

export default Events
