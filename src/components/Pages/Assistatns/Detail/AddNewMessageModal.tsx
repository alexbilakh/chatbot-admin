import React, { FC, useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Modal from '../../../Modal';
import Switch from '../../../Forms/Switch';
import AddAnswerItem from './AddAnswerItem';
import AddedMessagePreview from './AddedMessagePreview';

interface AddNewMessageModalProps {
  visibleAddNewMessageModal: boolean;
  itemType?: string;
  itemAnswers?: string[];
  itemMessage?: any;
  isUpdate?: boolean;
  communicationKey?: string;
  setVisibleAddNewMessageModal: (visibleAddNewMessageModal: boolean) => void;
  createCommunications?: (flow: object) => void;
  updateCommunications?: (flow: object) => void;
}

const AddNewMessageModal: FC<AddNewMessageModalProps> = ({
  visibleAddNewMessageModal,
  isUpdate = false,
  itemType = 'text',
  itemAnswers = [''],
  itemMessage = { title: '', content: '' },
  communicationKey,
  setVisibleAddNewMessageModal,
  createCommunications,
  updateCommunications,
}) => {
  const [isAddAnswer, setIsAddAnswer] = useState<boolean>(true);
  const [answerType, setAnswerType] = useState<string>(itemType);
  const [answers, setAnswers] = useState<string[]>(itemAnswers);
  const [message, setMessage] = useState<any>(itemMessage);

  useEffect(() => {
    if (answers.length === 0) {
      setAnswerType('text');
    }
  }, [answers]);

  const setAnswer = (value: string, index: number) => {
    setAnswers((prev) => [...prev.slice(0, index), value, ...prev.slice(index + 1)]);
  };

  const deleteAnswer = (index: number) => {
    setAnswers((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const handleAdd = () => {
    setAnswers((prev) => [...prev, '']);
  };

  const update = () => {
    if (!isUpdate && createCommunications) {
      const creatingCommunicationFlow = {
        title: message.title,
        body: message.content,
        active: false,
        type: answerType,
        answers,
      };
      createCommunications(creatingCommunicationFlow);
      clearAddMessage();
    }
    if (isUpdate && updateCommunications && communicationKey) {
      const updatingCommunicationFlow = {
        [communicationKey]: {
          title: message.title,
          body: message.content,
          active: false,
          type: answerType,
          answers,
        },
      };
      updateCommunications(updatingCommunicationFlow);
    }
    setVisibleAddNewMessageModal(false);
  };

  const clearAddMessage = () => {
    setMessage({ title: '', content: '' });
    setAnswerType('text');
    setAnswers([]);
    setIsAddAnswer(false);
  };

  return (
    <Modal visibleModal={visibleAddNewMessageModal} setVisibleModal={setVisibleAddNewMessageModal}>
      <Dialog.Panel as="div" className="panel border-0 overflow-hidden w-[1024px] p-10 bg-slate-950 rounded-xl  min-h-[774px] text-black dark:text-white-dark">
        <div className="">
          <h3 className="text-center text-white text-base font-bold font-['DM Sans'] leading-normal mb-10">{!isUpdate ? 'Add message' : 'Update message'}</h3>
          <div className="w-[944px] min-h-[550px] justify-start items-start gap-10 inline-flex">
            <div className="w-[544px] flex-col justify-start items-start inline-flex mb-10">
              <div className="self-stretch h-16 flex-col justify-center items-start flex mb-4">
                <div className="text-center text-white text-sm font-bold font-['DM Sans'] leading-normal">Add message title</div>
                <input
                  className="w-full h-10 px-3.5 py-2 bg-gray-900 rounded-lg shadow border border-slate-700"
                  placeholder="Type title"
                  value={message.title}
                  onChange={(e) => {
                    setMessage((prev: any) => ({ ...prev, title: e.target.value }));
                  }}
                ></input>
              </div>
              <div className="self-stretch h-16 flex-col justify-center items-start flex mb-4">
                <div className="text-center text-white text-sm font-bold font-['DM Sans'] leading-normal">Add message </div>
                <input
                  className="w-full h-10 px-3.5 py-2 bg-gray-900 rounded-lg shadow border border-slate-700"
                  placeholder="Type message"
                  value={message.content}
                  onChange={(e) => {
                    setMessage((prev: any) => ({ ...prev, content: e.target.value }));
                  }}
                ></input>
              </div>
              <div className="self-stretch px-3 py-2 bg-slate-700 rounded-lg justify-start items-start gap-2.5 inline-flex mb-4">
                <Switch
                  className="dark:bg-slate-400 dark:before:bg-white"
                  defaultChecked={isAddAnswer}
                  handleSwitch={() => {
                    setIsAddAnswer(!isAddAnswer);
                    if (!isAddAnswer) setAnswers([]);
                  }}
                />
                <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Add answers</div>
              </div>
              {isAddAnswer && (
                <>
                  <div className="text-center text-white text-sm font-bold font-['DM Sans'] leading-normal mb-1">Answer format</div>
                  <div className="flex gap-6 mb-4">
                    <label className="inline-flex gap-2">
                      <input
                        type="radio"
                        name="default_radio"
                        className="form-radio"
                        value="checkbox"
                        defaultChecked={answerType === 'checkbox'}
                        onChange={(e) => {
                          setAnswerType(e.target.value);
                        }}
                      />
                      <span className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Checkbox</span>
                    </label>
                    <label className="inline-flex gap-2">
                      <input
                        value="radio"
                        type="radio"
                        name="default_radio"
                        className="form-radio"
                        defaultChecked={answerType === 'radio'}
                        onChange={(e) => {
                          setAnswerType(e.target.value);
                        }}
                      />
                      <span className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Radio</span>
                    </label>
                    <label className="inline-flex gap-2">
                      <input
                        type="radio"
                        value="button"
                        name="default_radio"
                        className="form-radio"
                        defaultChecked={answerType === 'button'}
                        onChange={(e) => {
                          setAnswerType(e.target.value);
                        }}
                      />
                      <span className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Button</span>
                    </label>
                  </div>
                  <label className="text-center text-white text-sm font-bold font-['DM Sans'] leading-normal">Answers</label>
                  {answers.map((item, index) => (
                    <AddAnswerItem answer={item} key={index} index={index} setAnswer={setAnswer} deleteAnswer={deleteAnswer} />
                  ))}
                  <div className="text-center text-indigo-500 cursor-pointer text-sm font-bold font-['DM Sans'] leading-normal" onClick={handleAdd}>
                    Add new answer
                  </div>
                </>
              )}
            </div>
            <AddedMessagePreview message={message} answerType={answerType} answers={answers} />
          </div>
          <div className="flex justify-center gap-[19px] items-center mt-8">
            <button type="button" className="btn btn-dark w-36 h-10 px-4 py-2 bg-slate-700 rounded-lg " onClick={() => setVisibleAddNewMessageModal(false)}>
              <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">cancel</span>
            </button>
            <button type="button" className="btn btn-danger w-36 h-10 px-4 py-2 bg-rose-500 rounded-lg " onClick={update}>
              <span className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Update</span>
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};

export default AddNewMessageModal;
