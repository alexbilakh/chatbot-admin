import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';

import { setPageTitle } from '../store/themeConfigSlice';
import Header from '../components/Pages/Account/Header';
import PersonalInfo from '../components/Pages/Account/PersonalInfo';
import MemberList from '../components/Pages/Account/MemberList';
import ChatList from '../components/Pages/Account/ChatList';
import BankInformation from '../components/Pages/Account/BankInformation';

const Account = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Widget'));
    });
    const [sidebar, setSidebar] = useState<string>('personal');

    const navigateSidebar = (side: string) => {
        setSidebar(side);
    };

    return (
        <div className="flex-1">
            <Header />
            <div className="flex p-4 gap-8 flex-wrap">
                <div className="w-[299px] h-[960px] flex-col justify-start items-start gap-2 inline-flex fixed">
                    <button
                        onClick={() => {
                            navigateSidebar('personal');
                        }}
                        className={`self-stretch h-12 px-6 py-3  rounded-xl flex-col justify-start items-start gap-6 flex ${sidebar === 'personal' ? 'bg-violet-500' : 'bg-gray-900'}`}
                    >
                        <div className="text-left self-stretch text-white text-sm font-bold font-['DM Sans'] leading-normal">Personal info</div>
                    </button>
                    <button
                        onClick={() => {
                            navigateSidebar('members');
                        }}
                        className={`self-stretch h-12 px-6 py-3 bg-gray-900 rounded-xl flex-col justify-start items-start gap-6 flex  ${sidebar === 'members' ? 'bg-violet-500' : 'bg-gray-900'}`}
                    >
                        <div className="self-stretch text-left  text-white text-sm font-bold font-['DM Sans'] leading-normal">Members</div>
                    </button>
                    <button
                        onClick={() => {
                            navigateSidebar('chats');
                        }}
                        className={`self-stretch h-12 px-6 py-3 bg-gray-900 rounded-xl flex-col justify-start items-start gap-6 flex  ${sidebar === 'chats' ? 'bg-violet-500' : 'bg-gray-900'}`}
                    >
                        <div className="self-stretch text-left  text-white text-sm font-bold font-['DM Sans'] leading-normal">Chats</div>
                    </button>
                    <button
                        onClick={() => {
                            navigateSidebar('bank');
                        }}
                        className={`self-stretch h-12 px-6 py-3 bg-gray-900 rounded-xl flex-col justify-start items-start gap-6 flex  ${sidebar === 'bank' ? 'bg-violet-500' : 'bg-gray-900'}`}
                    >
                        <div className="self-stretch text-left  text-white text-sm font-bold font-['DM Sans'] leading-normal">Bank information</div>
                    </button>
                </div>
                <div className="flex-1 ml-[316px]">
                    {sidebar === 'personal' && <PersonalInfo />}
                    {sidebar === 'members' && <MemberList />}
                    {sidebar === 'chats' && <ChatList />}
                    {sidebar === 'bank' && <BankInformation />}
                </div>
            </div>
        </div>
    );
};

export default Account;
