import React, { useState } from 'react';
import IconFile from '../../../Icon/common/IconFile';
import Switch from '../../../Forms/Switch';
import IconDelete from '../../../Icon/common/IconDelete';
import DeleteModal from '../DeleteModal';
import FileEditModal from '../FileEditModal';
import IconStar from '../../../Icon/IconStar';

const DocumentItem = () => {
    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
    const [visibleFileEditModal, setVisibleFileEditModal] = useState(false);
    return (
        <div className="panel flex-1 py-[25px] px-6 h-[194px] rounded-xl">
            <div className="justify-start items-start gap-2 inline-flex mb-2">
                <div className="w-6 h-6 relative">
                    <IconFile />
                </div>
                <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Objection to Debt</div>
            </div>
            <div className=" text-white text-sm font-normal font-['DM Sans'] leading-normal mb-6">08 Jan 2024</div>
            <div className="flex mb-2">
                <div className="flex text-[#e2a03f] gap-2 mr-2">
                    <IconStar className="fill-warning w-5 h-5" />
                    <IconStar className="fill-warning w-5 h-5" />
                    <IconStar className="fill-warning w-5 h-5" />
                    <IconStar className="fill-warning w-5 h-5" />
                    <IconStar className="w-6 h-6" />
                </div>
                <span className="text-white text-sm font-normal font-['DM Sans'] leading-[2]">- 5.0</span>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex gap-1">
                    <Switch />
                    <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Active</div>
                </div>
                <div onClick={() => setVisibleDeleteModal(true)}>
                    <IconDelete />
                </div>
            </div>
            <DeleteModal visibleDeleteModal={visibleDeleteModal} setVisibleDeleteModal={setVisibleDeleteModal} />
            <FileEditModal visibleFileEditModal={visibleFileEditModal} setVisibleFileEditModal={setVisibleFileEditModal} />
        </div>
    );
};

export default DocumentItem;
