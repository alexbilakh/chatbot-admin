import React, { useState } from 'react';
import IconFile from '../../../Icon/common/IconFile';
import Switch from '../../../Forms/Switch';
import IconEdit from '../../../Icon/common/IconEdit';
import IconDelete from '../../../Icon/common/IconDelete';
import DeleteModal from '../DeleteModal';
import FileEditModal from '../FileEditModal';
import IconStar from '../../../Icon/IconStar';

interface FileItemPropI {
  item: any;
}

const FileItem = ({ item }: FileItemPropI) => {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [visibleFileEditModal, setVisibleFileEditModal] = useState(false);
  const [active, setActive] = useState<boolean>(item.active);

  const handleActive = (val: boolean) => {
    setActive(val);
  };

  const deleteItem = (id: string) => {

  };

  return (
    <div className="panel flex-1 py-[25px] px-6 h-[170px] rounded-xl">
      <div className="flex gap-1 mb-6">
        <div className="w-6 h-6 relative">
          <IconFile />
        </div>
        <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">{item.filename.split('.')[0]}</div>
      </div>
      <div className="justify-start items-start gap-[11px] inline-flex mb-6">
        <div className="w-10 h-6 px-2 bg-slate-700 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">{item.filename.split('.')[1]}</div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-1">
          <Switch defaultChecked={active} handleSwitch={handleActive} />
          <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Active</div>
        </div>
        <div className="flex gap-6">
          {/* <div onClick={() => setVisibleFileEditModal(true)}>
            <IconEdit />
          </div> */}
          <div onClick={() => setVisibleDeleteModal(true)}>
            <IconDelete />
          </div>
        </div>
      </div>
      <DeleteModal visibleDeleteModal={visibleDeleteModal} setVisibleDeleteModal={setVisibleDeleteModal} id={item.id['$oid']} deleteItem={deleteItem}/>
      <FileEditModal visibleFileEditModal={visibleFileEditModal} setVisibleFileEditModal={setVisibleFileEditModal} />
    </div>
  );
};

export default FileItem;
