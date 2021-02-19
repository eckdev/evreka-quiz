import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import ReactAudioPlayer from 'react-audio-player';

import 'leaflet/dist/leaflet.css';
import Wrapper from './Wrapper'
import ActionButton from './ActionButton'
import { Tabs, Tab, Content } from "../Tab";
import ActionModal from './ActionModal';
import IconLocation from './Icon'
import Modal from '../Modal'

function Details({ data, locationData, mediaData }) {
    const [active, setActive] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isImgModalOpen, setIsImgModalOpen] = useState(false)

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
                <ActionButton color={'#3DA836'} onClick={() => setIsModalOpen(true)}>Take Action</ActionButton>
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
                    <div style={{ marginTop: '30px', marginBottom: '30px', display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px' }}>
                            <span style={{ color: '#172C49', fontWeight: 'bold' }}>{data.filter(x => x.format === 'vehicle')[0].title}</span>
                            <span style={{ color: '#172C49' }}>{data.filter(x => x.format === 'vehicle')[0].value}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: '#172C49', fontWeight: 'bold' }}>{data[7].title}</span>
                            <span style={{ color: '#172C49' }}>{data[7].value}</span>
                        </div>
                    </div>
                </Content>
                <Content active={active === 1}>
                    <MapContainer style={{ height: '575px', width: '100%', marginBottom: '20px', marginTop: '20px' }} center={[locationData.latitude, locationData.longitude]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker
                            icon={IconLocation}
                            position={[locationData.latitude, locationData.longitude]}
                        >
                        </Marker>
                    </MapContainer>
                </Content>
                <Content active={active === 2}>
                    <div style={{ marginTop: '20px', position: 'relative' }}>
                        {
                            mediaData[0].url ?
                                (
                                    mediaData[0].type === 'audio' ?
                                        <ReactAudioPlayer
                                            src={mediaData[0].url}
                                            controls
                                        />
                                        :
                                        <>
                                            <img src={mediaData[0].url} alt="" width="100%" height="260" style={{ position: 'relative' }} />
                                            <img src="images/fullscreen.jpg" onClick={()=> setIsImgModalOpen(true)} width="20" height="20" alt="fullscreen" style={{ cursor:'pointer',position: 'absolute', bottom: '0', right: '0', float: 'right', padding: '18px' }} />
                                            {isImgModalOpen &&
                                                <Modal onClose={setIsImgModalOpen}>
                                                    <img src={mediaData[0].url} alt="" width="100%" height="400"  />
                                                </Modal>
                                            }
                                        </>
                                )
                                : <span>No Media Content</span>
                        }
                    </div>
                </Content>
            </>
            { isModalOpen &&
                <ActionModal onClose={setIsModalOpen} />
            }
        </Wrapper>
    )
}

export default Details
