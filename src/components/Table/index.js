import React from 'react'

import Wrapper from './Wrapper'
import Content from './Content'
import Container from './Container'
import Drag from './Drag';

function Table({ 
    cardData,
    setIsDetailsActive,
    setselectedIndex,
    selectedIndex,
    index }) {

    const convertDate = (date) => {
        let d = new Date(date);
        return d.toLocaleString();
    }

    const clickTableItem = (e) => {
        setIsDetailsActive(true)

        const idx = parseInt(e.currentTarget.id, 0);
        if (selectedIndex !== idx) {
            setselectedIndex(idx)
        }
    }
   
    return (
        <Wrapper onClick={(e) => clickTableItem(e)} isSelected={selectedIndex === index} id={index}>
            {
                cardData.map((result, idx) => (
                    idx < 5 ? 
                    <Container key={idx}>
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
