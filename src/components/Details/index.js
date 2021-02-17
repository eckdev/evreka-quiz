import React,{useState} from 'react'
import Wrapper from './Wrapper'
import ActionButton from './ActionButton'
import { Tabs, Tab, Content } from "./tab";

function Details() {
    const [active, setActive] = useState(0);
    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };
    return (
        <Wrapper>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <ActionButton color={'#454F63'} style={{ marginRight: 6 }}>No Action Needed</ActionButton>
                <ActionButton color={'#3DA836'}>Take Action</ActionButton>
            </div>
            <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                    Details
                 </Tab>

                <Tab onClick={handleClick} active={active === 1} id={1}>
                    Location
                </Tab>
                <Tab onClick={handleClick} active={active === 2} id={2}>
                    Media
                </Tab>
            </Tabs>
            <>
                <Content active={active === 0}>
                    <h1>Content 1</h1>
                </Content>
                <Content active={active === 1}>
                    <h1>Content 2</h1>
                </Content>
                <Content active={active === 2}>
                    <h1>Content 3</h1>
                </Content>
            </>
        </Wrapper>
    )
}

export default Details
