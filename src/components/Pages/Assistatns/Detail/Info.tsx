import React from 'react';
import Select from 'react-select';
import IconSecurityUser from '../../../Icon/Sidebar/IconSecurityUser';
import IconEdit from '../../../Icon/common/IconEdit';

const Info = () => {
    const options1 = [
        { value: 'group1', label: 'Group 1', isDisabled: 'option--is-disabled' },
        { value: 'orange', label: 'Orange' },
        { value: 'white', label: 'White' },
    ];
    return (
        <div className="panel mb-4 h-[164px] w-full px-4 pt-5 pb-6 bg-gray-900 rounded-xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex justify-between w-full">
                <div className="flex gap-4">
                    <IconSecurityUser className="w-[33.33px] h-[36.65px]" />
                    <h3 className="text-white text-[32px] font-bold font-['DM Sans'] leading-10">Courtney</h3>
                </div>
                <div className="flex gap-4">
                    <div className="p-2 bg-slate-700 rounded-lg shadow justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative">
                            <IconEdit color="#fff" />
                        </div>
                    </div>
                    <button className="w-36 h-10 px-4 py-2 bg-slate-700 rounded-lg shadow justify-center items-center gap-2 inline-flex text-white text-sm font-bold font-['DM Sans']">Run Test</button>
                    <button className="w-36 h-10 px-4 py-2 bg-blue-600 rounded-lg shadow justify-center items-center gap-2 inline-flex text-white text-sm font-bold font-['DM Sans']">Publish</button>
                </div>
            </div>
            <div className="flex gap-6 flex-wrap">
                <div className="w-[200px] h-16 flex-col justify-start items-start inline-flex custom-select">
                    <div className="text-center text-white text-sm font-medium font-['DM Sans'] leading-normal">GPT model</div>
                    <Select defaultValue={options1[1]} options={options1} isSearchable={false} className="w-[200px] bg-gray-900" />
                </div>
            </div>
        </div>
    );
};

export default Info;
