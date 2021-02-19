import React,{Children} from 'react'

import ModalWrapper from './ModalWrapper';
import ModalContent from './ModalContent';
import Close from './Close';

function Modal({children, onClose}) {
    return (
        <ModalWrapper>
            <ModalContent>
                <Close src="images/close.svg" onClick={() =>onClose()} />
                {Children.toArray(children)}
            </ModalContent>
        </ModalWrapper>
    )
}

export default Modal
