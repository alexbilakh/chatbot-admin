import React, { useState } from 'react';
import Switch from '../../Forms/Switch';
import IconDelete from '../../Icon/common/IconDelete';
import IconUser from '../../Icon/IconUser';
import DeleteMemberModal from './DeleteMemberModal';

const MemberItem = () => {
    const [visibleDeleteMemberModal, setVisibleDeleteMemberModal] = useState<boolean>(false);

    return (
        <div className="panel flex-1 py-[25px] px-6 h-[226px] rounded-xl flex-col justify-between items-start inline-flex">
            <div className="flex justify-between w-full">
                <div className="justify-start items-start gap-2 inline-flex">
                    <div className="w-6 h-6 relative">
                        <IconUser className="w-6 h-6 text-white" duotone={false} />
                    </div>
                    <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Savannah</div>
                </div>
                <div className="text-indigo-500 text-sm font-bold font-['DM Sans'] leading-normal">Resend invite</div>
            </div>
            <div className="w-[213px] h-12 flex-col justify-start items-start inline-flex">
                <div className="justify-start items-start gap-2 inline-flex">
                    <label className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-normal">Email:</label>
                    <div className="text-sky-500 text-sm font-normal font-['DM Sans'] leading-normal">debra.holt@example.com</div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                    <label className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-normal">Last activity:</label>
                    <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">4/21/12</div>
                </div>
            </div>
            <div className="justify-start items-start gap-[11px] inline-flex">
                <div className="w-14 h-6 px-2 bg-green-900 rounded-md justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Active</div>
                </div>
                <div className="w-[66px] h-6 px-2 bg-stone-700 rounded-md justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Inactive</div>
                </div>
                <div className="w-[105px] h-6 px-2 bg-slate-500 rounded-md justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Pending invite</div>
                </div>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex gap-1">
                    <Switch />
                    <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Deactivate</div>
                </div>
                <div className="flex gap-6">
                    <div onClick={() => setVisibleDeleteMemberModal(true)}>
                        <IconDelete />
                    </div>
                </div>
            </div>
            <DeleteMemberModal visibleDeleteMemberModal={visibleDeleteMemberModal} setVisibleDeleteMemberModal={setVisibleDeleteMemberModal} />
        </div>
    );
};

export default MemberItem;
