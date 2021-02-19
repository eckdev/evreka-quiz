import React from 'react'
import Img from './LoadingImg'
import Svg from './Svg'
import Header from './Header';
import Message from './Message'

function Alert({
    error,
    loading
}) {
    return (
        <>
            {
                loading ? <div style={{ textAlign: 'center' }}><Img src="images/loading.svg" /></div> :
                    <>
                        <div style={{ textAlign: 'center' }}>
                            {!error ?
                                <>
                                    <Svg src="images/success.svg"></Svg>
                                    <Header color={"#3DA836"}>ACTION HAS BEEN TAKEN!</Header>
                                    <Message>You can see the action details from details tab.</Message>
                                </>
                                :
                                <>
                                    <Svg src="images/error.svg"></Svg>
                                    <Header color={"#D92323"}>A PROBLEM OCCURED!</Header>
                                    <Message>We cannot continue due to a problem. Please try again later.</Message>
                                </>
                            }
                        </div>
                    </>
            }
        </>
    )
}

export default Alert
