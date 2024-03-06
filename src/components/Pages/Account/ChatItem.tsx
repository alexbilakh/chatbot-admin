import React, { useState } from 'react';
import IconChat from '../../Icon/common/IconChat';
import IconCopy from '../../Icon/common/IconCopy';

const ChatItem = () => {
    return (
        <div className="panel flex-1 py-[25px] px-6 h-[113px] rounded-xl flex-col justify-between items-start inline-flex">
            <div className="self-stretch h-[63px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="justify-start items-start gap-1 flex">
                        <IconChat />
                        <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Chat 1</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <IconCopy />
                    </div>
                </div>
                <div className="w-[173px] h-[23px] text-sky-500 text-sm font-normal font-['DM Sans'] leading-normal">http://192.168.20.125:5000/</div>
            </div>
        </div>
    );
};

export default ChatItem;
