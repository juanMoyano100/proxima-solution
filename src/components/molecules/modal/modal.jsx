//Create a modal component to show children components

import React from 'react';
import './modal.styles.css';
import classnames from 'classnames';
import Button from '../../atoms/button/button';
import { BsXLg } from 'react-icons/bs';

const Modal = ({ children, isShowing, setIsShowing }) => {
    return (
        <div className={classnames('modal', { "modal-active": isShowing })}>
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-close">
                        <Button onClick={() => { setIsShowing(false) }}><BsXLg /></Button>
                    </div>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;