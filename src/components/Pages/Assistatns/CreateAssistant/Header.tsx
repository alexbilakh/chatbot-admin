import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';
import HeaderPart from '../../../Layouts/HeaderPart';
import IconArrayLeft from '../../../Icon/common/IconArrowLeft';
import { Link } from 'react-router-dom';
const Header = () => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const [search, setSearch] = useState(false);

    return (
        <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
            <div className="shadow-sm">
                <div className="relative bg-white w-full  dark:bg-gray-900 h-16 px-4 py-3 border-b border-slate-700">
                    <div className="flex justify-between dark:text-[#d0d2d6]">
                        <HeaderPart />
                        <div className="flex justify-center items-center">
                            <Link to="/assistants" className="mr-2">
                                <IconArrayLeft />
                            </Link>
                            <div className="text-white text-2xl font-bold font-['DM Sans'] leading-loose">New Assistant</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
