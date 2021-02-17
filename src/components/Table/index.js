import React from 'react'

import Wrapper from './Wrapper'
import Content from './Content'
import Container from './Container'
import Drag from './Drag';

function Table({ cardData }) {
    const convertDate = (date) => {
        let d = new Date(date);
        return d.toLocaleString();
    }
    
    return (
        <Wrapper>
            {
                cardData.map((result, index) => (
                    index < 5 ? <Container key={index}>
                        {result.title === 'Aksiyon' && result.value === '-' ? <Drag /> : null}
                        <Content isBold={true}>{result.title}</Content>
                        <Content isBold={false}>{result.title === 'Tarih' ? convertDate(result.value) : result.value}</Content>
                    </Container> : null
                ))
            }
        </Wrapper>
    )
}

export default Table
