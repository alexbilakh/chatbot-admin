import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import IconSearch from '../../Icon/IconSearch';
import MemberItem from './MemberItem';
import IconAddSquare from '../../Icon/Assistants/IconAddSquare';
import InviteMemberModal from './InviteMemberModal';

const MemberList = () => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const [visibleInviteMemberModal, setVisibleInviteMemberModal] = useState<boolean>(false);

    const openInviteEditModal = () => {
        setVisibleInviteMemberModal(true);
    };

    return (
        <div className="mb-4">
            <div className="mb-4 relative">
                <input className="w-full h-10 px-12 py-2 bg-gray-900 rounded-lg shadow border border-slate-700" placeholder="Search" />
                <IconSearch className="absolute top-2 left-[14px] w-6 h-6" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <MemberItem />
                <MemberItem />
                <MemberItem />
                <div className="panel flex-1 py-[25px] px-6 h-[226px] flex justify-center items-center cursor-pointer" onClick={openInviteEditModal}>
                    <div className="flex">
                        <IconAddSquare />
                        <h5 className="ml-2 leading-6">Invite new member</h5>
                    </div>
                </div>
            </div>
            <InviteMemberModal visibleInviteMemberModal={visibleInviteMemberModal} setVisibleInviteMemberModal={setVisibleInviteMemberModal} />
        </div>
    );
};

export default MemberList;
