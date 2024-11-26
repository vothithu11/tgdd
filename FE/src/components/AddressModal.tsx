'use client';
import { createPortal } from 'react-dom';
import AddressForm from '@/components/header/AddressForm';
import { ReactNode, useState } from 'react';

function AddressModal({ children }:{children:ReactNode}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <span onClick={() => setShowModal(true)} className="text-blue-custom">
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
