import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import IconEdit from '../../Icon/common/IconEdit';
import PersonalInfoEditModal from './PersonalInfoEditModal';

const PersonalInfo = () => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const [visiblePersonalInfoEditModal, setVisiblePersonalInfoEditModal] = useState<boolean>(false);

    const openPersonalEditModal = () => {
        setVisiblePersonalInfoEditModal(true);
    };

    return (
        <div className="w-full min-h-[800px] px-4 pt-5 pb-6 bg-gray-900 rounded-xl flex-col justify-start items-start gap-6 inline-flex mb-4">
            <div className="justify-between items-center inline-flex w-full">
                <div className="text-white text-2xl font-bold font-['DM Sans'] leading-loose">Ronald Richards</div>
                <div className="p-2 bg-slate-700 rounded-lg shadow justify-center items-center gap-2 flex">
                    <div className="w-6 h-6 relative" onClick={openPersonalEditModal}>
                        <IconEdit color="#fff" />
                    </div>
                </div>
            </div>
            <div className="self-stretch h-16 pb-4 border-b border-slate-500 flex-col justify-start items-start flex">
                <div className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-normal">Registration date</div>
                <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Sep 15, 2023</div>
            </div>
            <div className="self-stretch pb-4 border-b border-slate-500 justify-start items-start gap-4 inline-flex">
                <div className="w-80 flex-col justify-start items-start inline-flex">
                    <div className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-normal">Email</div>
                    <div className="text-sky-500 text-sm font-normal font-['DM Sans'] leading-normal">tim.jennings@example.com</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-normal">Address</div>
                    <div className="text-white text-sm font-normal font-['DM Sans'] leading-normal">1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
                </div>
            </div>
            <div className="h-12 flex-col justify-start items-start flex">
                <div className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-normal">ID address</div>
                <div className="text-sky-500 text-sm font-normal font-['DM Sans'] leading-normal">http://192.168.20.123:5000/</div>
            </div>
            <PersonalInfoEditModal visiblePersonalInfoEditModal={visiblePersonalInfoEditModal} setVisiblePersonalInfoEditModal={setVisiblePersonalInfoEditModal} />
        </div>
    );
};

export default PersonalInfo;
