import React, { FC, useState, Fragment, PropsWithChildren } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
    visibleModal: boolean;
    setVisibleModal: (visibleFileEdit: boolean) => void;
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ visibleModal, setVisibleModal, children }) => {
    return (
        <Transition appear show={visibleModal} as={Fragment}>
            <Dialog as="div" open={visibleModal} onClose={() => setVisibleModal(false)}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0" />
                </Transition.Child>
                <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {children}
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
