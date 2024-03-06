import React, { FC, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Modal from '../../Modal';

interface deleteModalProps {
  visibleDeleteModal: boolean;
  setVisibleDeleteModal: (visibleDeleteModal: boolean) => void;
  text?: string;
  id?: string;
  deleteItem?: (id: string) => void;
}

const DeleteModal: FC<deleteModalProps> = ({ visibleDeleteModal, setVisibleDeleteModal, text, id, deleteItem }) => {
  const del = () => {
    if (id && deleteItem) deleteItem(id);
    setVisibleDeleteModal(false);
  };

  return (
    <Modal visibleModal={visibleDeleteModal} setVisibleModal={setVisibleDeleteModal}>
      <Dialog.Panel as="div" className="panel border-0 overflow-hidden w-[480px] p-10 bg-slate-950 rounded-xl  h-[280px] max-w-lg text-black dark:text-white-dark">
        <div className="">
          <h3 className="text-center text-white text-base font-bold font-['DM Sans'] leading-normal mb-2">{text}</h3>
          <div className="w-[400px] text-center text-white text-sm font-normal font-['DM Sans'] leading-normal mb-20">Are you sure to delete?</div>
          <div className="flex justify-center gap-[19px] items-center mt-8">
            <button type="button" className="btn btn-dark w-36 h-10 px-4 py-2 bg-slate-700 rounded-lg " onClick={() => setVisibleDeleteModal(false)}>
              <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">cancel</span>
            </button>
            <button type="button" className="btn btn-danger w-36 h-10 px-4 py-2 bg-rose-500 rounded-lg " onClick={del}>
              <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Yes, delete</span>
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};

export default DeleteModal;
