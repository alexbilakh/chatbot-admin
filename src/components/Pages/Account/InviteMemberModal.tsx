import React, { FC, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Modal from '../../Modal';

interface InviteMemberModalProps {
    visibleInviteMemberModal: boolean;
    setVisibleInviteMemberModal: (visibleInviteMemberModal: boolean) => void;
}

const InviteMemberModal: FC<InviteMemberModalProps> = ({ visibleInviteMemberModal, setVisibleInviteMemberModal }) => {
    return (
        <Modal visibleModal={visibleInviteMemberModal} setVisibleModal={setVisibleInviteMemberModal}>
            <Dialog.Panel as="div" className="panel border-0 overflow-hidden w-[624px] p-10 bg-slate-950 rounded-xl  h-[432px] text-black dark:text-white-dark">
                <div className="">
                    <h4 className="text-center text-white text-base font-bold font-['DM Sans'] leading-normal mb-10">Invite Member</h4>
                    <div className="grid gap-6 mb-6 grid-cols-2">
                        <div className="h-16 flex-col justify-center items-start inline-flex">
                            <div className="text-center text-white text-sm font-bold font-['DM Sans'] leading-normal">First name</div>
                            <input className="w-full px-3 py-2 bg-gray-900 rounded-lg shadow border border-slate-700"></input>
                        </div>
                        <div className="h-16 flex-col justify-center items-start inline-flex">
                            <div className="text-center text-white text-sm font-bold font-['DM Sans'] leading-normal">First name</div>
                            <input className="w-full px-3 py-2 bg-gray-900 rounded-lg shadow border border-slate-700"></input>
                        </div>
                    </div>
                    <div className="w-[544px] h-16 flex-col justify-center items-start inline-flex mb-20">
                        <div className="text-center text-white text-sm font-bold font-['DM Sans'] leading-normal">Email</div>
                        <input className="w-full px-3 py-2 bg-gray-900 rounded-lg shadow border border-slate-700"></input>
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                        <button type="button" className="btn btn-dark w-36 h-10 px-4 py-2 bg-slate-700 rounded-lg " onClick={() => setVisibleInviteMemberModal(false)}>
                            <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">cancel</span>
                        </button>
                        <button type="button" className="btn btn-dark w-36 h-10 px-4 py-2 bg-[#4361EE] border-[#4361EE] rounded-lg " onClick={() => setVisibleInviteMemberModal(false)}>
                            <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Update</span>
                        </button>
                    </div>
                </div>
            </Dialog.Panel>
        </Modal>
    );
};

export default InviteMemberModal;
