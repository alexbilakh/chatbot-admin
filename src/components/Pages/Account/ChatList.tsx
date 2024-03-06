import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import ChatItem from './ChatItem';

const ChatList = () => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    return (
        <div className="mb-8">
            <div className="grid grid-cols-2 gap-4">
                <ChatItem />
                <ChatItem />
                <ChatItem />
            </div>
        </div>
    );
};

export default ChatList;
