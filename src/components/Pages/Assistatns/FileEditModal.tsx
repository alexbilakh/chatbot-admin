import React, { FC, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import IconFileEdit from '../../Icon/Assistants/IconFileEdit';
import Modal from '../../Modal';

interface FileEditProps {
    visibleFileEditModal: boolean;
    setVisibleFileEditModal: (visibleFileEdit: boolean) => void;
}

const FileEditModal: FC<FileEditProps> = ({ visibleFileEditModal, setVisibleFileEditModal }) => {
    return (
        <Modal visibleModal={visibleFileEditModal} setVisibleModal={setVisibleFileEditModal}>
            <Dialog.Panel as="div" className="panel border-0 overflow-hidden w-[480px] p-10 bg-slate-950 rounded-xl  h-[472px] max-w-lg text-black dark:text-white-dark">
                <div className="">
                    <h3 className="text-center text-white text-base font-bold font-['DM Sans'] leading-normal mb-20">Upload Files</h3>
                    <div className="flex flex-col items-center gap-2">
                        <IconFileEdit />
                        <div className="w-[216px] text-center">
                            <span className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Drag and drop files , or </span>
                            <span className="text-blue-600 text-sm font-bold font-['DM Sans'] leading-normal">click</span>
                            <span className="text-white text-sm font-normal font-['DM Sans'] leading-normal"> to select from computer</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 items-center mt-8">
                        <button type="button" className="btn btn-dark w-36 h-10 px-4 py-2 bg-slate-700 rounded-lg " onClick={() => setVisibleFileEditModal(false)}>
                            <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">cancel</span>
                        </button>
                        <button type="button" className="btn btn-dark w-36 h-10 px-4 py-2 bg-blue-600 border-blue-600 rounded-lg " onClick={() => setVisibleFileEditModal(false)}>
                            <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Upload</span>
                        </button>
                    </div>
                </div>
            </Dialog.Panel>
        </Modal>
    );
};

export default FileEditModal;
