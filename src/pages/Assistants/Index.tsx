import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { IRootState } from '../../store';
import Switch from '../../components/Forms/Switch';
import { setPageTitle } from '../../store/themeConfigSlice';
import StatsList from '../../components/Pages/Assistatns/Home/StatsList';
import AssistantList from '../../components/Pages/Assistatns/Home/AssistantList';
import Header from '../../components/Layouts/Header';
import FileList from '../../components/Pages/Assistatns/Home/FileList';

const Assistants = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Assistants'));
    });

    const [isAssistants, setIsAssistants] = useState(true);

    return (
        <div className="flex-1">
            <Header />
            <div className="p-4">
                <div className="flex mb-5">
                    <div className="flex">
                        <div className="justify-start items-center gap-2 flex">
                            <div
                                className={`${isAssistants ? 'bg-violet-500' : ''} px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex cursor-pointer`}
                                onClick={() => {
                                    setIsAssistants(true);
                                }}
                            >
                                <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Assistants</div>
                            </div>
                            <div
                                className={`${!isAssistants ? 'bg-violet-500' : ''} px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex cursor-pointer`}
                                onClick={() => {
                                    setIsAssistants(false);
                                }}
                            >
                                <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Files</div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto flex">
                        <div className="flex mr-3">
                            <span className="mr-3 inline-block leading-6">Active: </span>
                            <Switch />
                        </div>
                        <div className="flex">
                            <span className="mr-3 inline-block leading-6">Default: </span>
                            <Switch />
                        </div>
                    </div>
                </div>
                {isAssistants && (
                    <>
                        <StatsList />
                        <AssistantList />
                    </>
                )}
                {!isAssistants && (
                    <>
                        <FileList />
                    </>
                )}
            </div>
        </div>
    );
};

export default Assistants;
