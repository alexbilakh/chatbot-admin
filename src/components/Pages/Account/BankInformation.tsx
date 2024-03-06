import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import IconEdit from '../../Icon/common/IconEdit';

const BankInformation = () => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    return (
        <div className="w-full min-h-[800px] px-4 pt-5 pb-6 bg-gray-900 rounded-xl flex-col justify-start items-start gap-6 inline-flex mb-4">
            <div className="w-full justify-between items-center inline-flex">
                <h4 className="text-white text-base font-bold font-['DM Sans'] leading-normal">Bank information</h4>
                <div className="w-6 h-6 relative">
                    <IconEdit color="#fff" />
                </div>
            </div>
            <div className="self-stretch pb-4 border-b border-slate-500 justify-start items-start gap-4 inline-flex">
                <div className="w-80 flex-col justify-start items-start inline-flex">
                    <label className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-normal">Account no.</label>
                    <span className="text-white text-sm font-normal font-['DM Sans'] leading-normal">03/04/2026</span>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <label className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-normal">Account owner</label>
                    <span className="text-white text-sm font-normal font-['DM Sans'] leading-normal">Esther Howard</span>
                </div>
            </div>
            <div className="self-stretch h-12 flex-col justify-start items-start flex">
                <label className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-normal">Billing address</label>
                <span className="text-white text-sm font-normal font-['DM Sans'] leading-normal">1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
            </div>
        </div>
    );
};

export default BankInformation;
