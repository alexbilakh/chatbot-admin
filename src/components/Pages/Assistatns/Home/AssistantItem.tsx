import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconAddSquare from '../../../Icon/Assistants/IconAddSquare';
import Switch from '../../../Forms/Switch';
import IconEdit from '../../../Icon/common/IconEdit';
import IconDelete from '../../../Icon/common/IconDelete';
import IconAssistant from '../../../Icon/Assistants/Assistant';
import DeleteModal from '../DeleteModal';

interface AssistantItemPropI {
  asst: any;
}

const AssistantItem = ({ asst }: AssistantItemPropI) => {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate('/assistants/detail/' + asst.id['$oid']);
  };

  return (
    <div className="panel flex-1 py-[25px] px-6 h-[180px] rounded-xl flex-col justify-between items-start inline-flex">
      <div className="justify-start items-start gap-2 inline-flex" onClick={goToDetail}>
        <div className="w-6 h-6 relative">
          <IconAssistant />
        </div>
        <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">{asst.title}</div>
      </div>
      <div className="justify-start items-start gap-[11px] inline-flex">
        <div className="w-14 h-6 px-2 bg-green-900 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Active</div>
        </div>
        <div className="w-[66px] h-6 px-2 bg-gray-500 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Inactive</div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-1">
          <Switch />
          <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Deactivate</div>
        </div>
        <div className="flex gap-6">
          <IconEdit />
          <div onClick={() => setVisibleDeleteModal(true)}>
            <IconDelete />
          </div>
        </div>
      </div>
      <DeleteModal visibleDeleteModal={visibleDeleteModal} setVisibleDeleteModal={setVisibleDeleteModal} />
    </div>
  );
};

export default AssistantItem;
