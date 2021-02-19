import React, { useState } from 'react'

import Modal from '../Modal'
import { Tabs, Tab, Content } from "../Tab";
import NumberDot from '../Tab/NumberDot'
import SelectActionBox from './SelectActionBox'
import Button from '../Button/StyledButton'
import Textarea from '../Textarea'
import Alert from '../Alert'

function ActionModal({onClose,setAction,setDetail}) {
    const [active, setActive] = useState(0);
    const [isSelectAction, setIsSelectAction] = useState(false)
    const [activeAction, setActiveAction] = useState(null);
    const [loading, setLoading] = useState(false)
    const [isAlertActive, setIsAlertActive] = useState(false)
    const [error, setError] = useState(false)
    const [textAreaVal, setTextAreaVal] = useState("")

    const handleClick = (id) => {
        if (id !== activeAction) {
            setActiveAction(id);
            setIsSelectAction(true)
        }
    };

    const textAreaOnChange = e => {
        setTextAreaVal(e.target.value)
    }

    const takeAction = () => {
        setIsAlertActive(true);
        setLoading(true);

        setTimeout(() => {
            if (textAreaVal.length === 0) {
                setError(true)
            }
            else {
                let selectedActionText = activeAction === 0 ? 'Mark As Resolved' : 'Change Asset';
                setError(false);
                setAction(selectedActionText);
                setDetail(textAreaVal)
            }
            setLoading(false);
        }, 1000);

    }

    return (
        <Modal onClose={onClose}>
            {
                isAlertActive ? <Alert error={error} loading={loading} /> :
                    <>
                        <Tabs style={{ textAlign: 'center' }}>
                            <Tab active={active === 0} id={0} style={{ fontSize: '19px' }}>
                                <NumberDot>1</NumberDot>
                                <span style={{ marginLeft: '20px' }}>Select Action</span>
                            </Tab>

                            <Tab active={active === 1} id={1} style={{ fontSize: '19px' }}>
                                <NumberDot>2</NumberDot>
                                <span style={{ marginLeft: '20px' }}>Take Action</span>
                            </Tab>
                        </Tabs>
                        <>
                            <Content active={active === 0} style={{ textAlign: 'center' }}>
                                <SelectActionBox onClick={() => handleClick(0)} active={activeAction === 0}>
                                    <span style={{ color: activeAction === 0 ? '#fff' : '#172C49', fontSize: '16px', fontWeight: 'bold' }}>Mark As Resolved</span>
                                    <span style={{ color: activeAction === 0 ? '#fff' : '#454F63', fontSize: '14px' }}>Mark this event as resolved and enter the details of the resolution.</span>
                                </SelectActionBox>
                                <SelectActionBox onClick={() => handleClick(1)} active={activeAction === 1}>
                                    <span style={{ color: activeAction === 1 ? '#fff' : '#172C49', fontSize: '16px', fontWeight: 'bold' }}>Change Asset</span>
                                    <span style={{ color: activeAction === 1 ? '#fff' : '#454F63', fontSize: '14px' }}>Change the asset with another one.</span>
                                </SelectActionBox>
                                <Button color={'#3DA836'} style={{ marginTop: '32px' }} disabled={isSelectAction ? false : true} onClick={() => setActive(1)}>Next</Button>
                            </Content>
                            <Content active={active === 1}>
                                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '24px', marginBottom: '24px' }}>
                                    {activeAction === 0 ? <>
                                        <span style={{ color: '#172C49', fontSize: '16px', fontWeight: 'bold' }}>Mark As Resolved</span>
                                        <span style={{ color: '#454F63', fontSize: '14px' }}>Mark this event as resolved and enter the details of the resolution.</span>
                                    </>
                                        :
                                        <>
                                            <span style={{ color: '#172C49', fontSize: '16px', fontWeight: 'bold' }}>Change Asset</span>
                                            <span style={{ color: '#454F63', fontSize: '14px' }}>Change the asset with another one.</span>
                                        </>
                                    }
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ color: '#454F63', fontWeight: 'bold' }}>Resulation Detail*</span>
                                    <Textarea placeholder="Enter resolution detail…" maxLength="300" onChange={(e) => textAreaOnChange(e)}></Textarea>
                                </div>
                                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                                    <Button color={'#454F63'} style={{ marginRight: '24px' }} onClick={() => setActive(0)}>Back</Button>
                                    <Button color={'#3DA836'} onClick={() => takeAction()}>Take Action</Button>
                                </div>
                            </Content>
                        </>
                    </>
            }
        </Modal>
    )
}

export default ActionModal

//todo list
// take action tab tamamla
//action modal close event ve butonu
//leaflet ekleme ve image buyutme// audio ekleme
//dataların eklenmesi