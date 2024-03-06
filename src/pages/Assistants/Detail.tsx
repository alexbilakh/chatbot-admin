import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { setPageTitle } from '../../store/themeConfigSlice';
import Header from '../../components/Pages/Assistatns/Detail/Header';
import Info from '../../components/Pages/Assistatns/Detail/Info';
import Main from '../../components/Pages/Assistatns/Detail/Main';

const AssistantDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Assistant Detail'));
  });

  return (
    <div className="">
      <Header />
      <div className="p-4">
        <Info />
        <Main />
      </div>
    </div>
  );
};

export default AssistantDetail;
