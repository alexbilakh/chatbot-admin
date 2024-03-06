import React, { useContext } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import IconMessage from '../Icon/Sidebar/IconMessage';
import IconAssistant from '../Icon/Assistants/Assistant';
import IconAccount from '../Icon/Sidebar/IconAccount';
import IconStats from '../Icon/Sidebar/IconStats';
import IconSetting from '../Icon/Sidebar/IconSetting';
import IconCalendar from '../Icon/Sidebar/IconCalendar';
import IconUsers from '../Icon/IconUsers';
import IconChat from '../Icon/common/IconChat';
import IconLogo from '../Icon/common/IconLogo';
import IconKaya from '../Icon/common/IconKaya';

const Sidebar = () => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[280px] bg-gray-900 border-r border-slate-700 p-[16px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${
                    semidark ? 'text-white-dark' : ''
                }`}
            >
                <div className="bg-white dark:bg-gray-900 h-full">
                    <div className="flex justify-between items-center mb-[56px]">
                        <div className="w-[248px] h-10 pr-[11px] py-2 rounded-lg justify-start items-center gap-2.5 inline-flex">
                            <IconLogo />
                            <IconKaya />
                        </div>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 m-auto">
                                <path d="M13 19L7 12L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold py-0">
                            <li className="nav-item mb-2">
                                <div className="w-[248px] h-8 px-[11px] py-2 rounded-lg justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-gray-500 text-xs font-bold font-['DM Sans'] uppercase leading-none">GENERAL</div>
                                </div>
                            </li>

                            <li className="nav-item mb-2">
                                <NavLink to="/assistants" className="group px-[11px] py-2 h-[40px]">
                                    <div className="flex items-center">
                                        <IconAssistant className="w-6 h-6" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-white dark:group-hover:text-white-dark text-sm font-bold font-['DM Sans']">{t('Assistants')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <NavLink to="/account" className="group px-[11px] py-2 h-[40px]">
                                    <div className="flex items-center">
                                        <IconCalendar className="w-6 h-6" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-white dark:group-hover:text-white-dark text-sm font-bold font-['DM Sans']">{t('Calendar')}</span>
                                    </div>
                                </NavLink>
                            </li>

                            <li className="nav-item mb-2">
                                <NavLink to="/widget" className="group px-[11px] py-2 h-[40px]">
                                    <div className="flex items-center">
                                        <IconMessage className="w-6 h-6" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-white dark:group-hover:text-white-dark text-sm font-normal font-['DM Sans']">{t('Widget')}</span>
                                    </div>
                                </NavLink>
                            </li>

                            <li className="nav-item mb-6">
                                <NavLink to="/stats" className="group px-[11px] py-2 h-[40px]">
                                    <div className="flex items-center">
                                        <IconStats className="w-6 h-6" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-white dark:group-hover:text-white-dark text-sm font-normal font-['DM Sans']">{t('Stats')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <div className="w-[248px] h-8 px-[11px] py-2 rounded-lg justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-gray-500 text-xs font-bold font-['DM Sans'] uppercase leading-none">Conversations</div>
                                </div>
                            </li>

                            <li className="nav-item mb-2">
                                <NavLink to="/chats" className="group px-[11px] py-2 h-[40px]">
                                    <div className="flex items-center">
                                        <IconChat className="w-6 h-6" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-white dark:group-hover:text-white-dark text-sm font-normal font-['DM Sans']">{t('Chats')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <NavLink to="/users" className="group px-[11px] py-2 h-[40px]">
                                    <div className="flex items-center">
                                        <IconUsers className="w-6 h-6" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-white dark:group-hover:text-white-dark text-sm font-normal font-['DM Sans']">{t('Users')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <div className="w-[248px] h-8 px-[11px] py-2 rounded-lg justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-gray-500 text-xs font-bold font-['DM Sans'] uppercase leading-none">Settings</div>
                                </div>
                            </li>

                            <li className="nav-item mb-2">
                                <NavLink to="/account" className="group px-[11px] py-2 h-[40px]">
                                    <div className="flex items-center">
                                        <IconAccount className="w-6 h-6" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-white dark:group-hover:text-white-dark text-sm font-bold font-['DM Sans']">{t('Account')}</span>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
