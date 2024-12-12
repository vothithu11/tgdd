'use client';
import { createPortal } from 'react-dom';
import AddressForm from '@/components/header/AddressForm';
import { ReactNode, useState } from 'react';

function AddressModal({ children,className='text-blue-custom' }:{children:ReactNode,className?:string}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <span onClick={() => setShowModal(true)} className={className}>
                <span className="cursor-pointer">{children}</span>
            </span>
            {showModal &&
                createPortal(
                    <div className="modal">
                        <AddressForm onClose={() => setShowModal(false)} />
                    </div>,
                    document.body,
                )}
        </>
    );
}

export default AddressModal;
