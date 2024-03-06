import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { setPageTitle } from '../store/themeConfigSlice';
import Header from '../components/Pages/Widget/Header';
import WidgetItem from '../components/Pages/Widget/WidgetItem';
import { widgetPropsI, widgetColorsI } from '../types/widget';
import { getWidgetConfigs, updateWidgetColor } from '../api/widget';

const Widget = () => {
  const [headingBackground, setHeadingBackground] = useState<widgetPropsI>({
    title: 'Heading background',
    content: 'This color with be used for the background of widget in the banner mode',
    type: 'heading_background_color',
  });
  const [headingFontColor, setHeadingFontColor] = useState<widgetPropsI>({
    title: 'Heading font color',
    content: 'This color with be used for the background of widget in the banner mode',
    type: 'heading_font_color',
  });
  const [bodyColor, setBodyColor] = useState<widgetPropsI>({
    title: 'Heading background',
    content: 'This color with be used for the background of widget in the banner mode',
    type: 'body_color',
  });
  const [fontColor, setFontColor] = useState<widgetPropsI>({
    title: 'Heading background',
    content: 'This color with be used for the background of widget in the banner mode',
    type: 'font_color',
  });
  const [primaryElementsColor, setPrimaryElementsColor] = useState<widgetPropsI>({
    title: 'Heading background',
    content: 'This color with be used for the background of widget in the banner mode',
    type: 'cta_color',
  });
  const [secondaryElementsColor, setSecondaryElementsColor] = useState<widgetPropsI>({
    title: 'Heading background',
    content: 'This color with be used for the background of widget in the banner mode',
    type: 'cta_font_color',
  });
  const [chatBubble, setChatBubble] = useState<widgetPropsI>({
    title: 'Heading background',
    content: 'This color with be used for the background of widget in the banner mode',
    type: 'bubble_background_color',
  });

  const [colors, setColors] = useState<widgetColorsI>({});
  const [widgetId, setWidgetId] = useState<string>('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Widget'));
  });

  useEffect(() => {
    fetchWidgetConfigs();
  }, []);

  const fetchWidgetConfigs = async () => {
    const res = await getWidgetConfigs();
    const colorsRes = res[0].colors;
    setColors({
      body_color: colorsRes.body_color,
      bubble_background_color: colorsRes.bubble_background_color,
      cta_color: colorsRes.cta_color,
      cta_font_color: colorsRes.cta_font_color,
      font_color: colorsRes.font_color,
      heading_background_color: colorsRes.heading_background_color,
      heading_font_color: colorsRes.heading_font_color,
      transcript_color: colorsRes.transcript_color,
    });
    setWidgetId(res[0].id['$oid']);
  };

  const updateColor = async (type: string, color: string) => {
    console.log('kadkfasd===>', widgetId, type, color);
    const updatingData = { widgetId, type, color };
    await updateWidgetColor(updatingData);
  };

  return (
    <div className="flex-1">
      <Header />
      <div className="p-4 grid md:grid-cols-3 sm:col-span-1 gap-8">
        <div className="md:col-span-2 sm:col-span-1">
          <div className="w-[697px] text-white text-base font-bold font-['DM Sans'] leading-normal mb-[18px]">Heading background</div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 mb-8">
            <WidgetItem widgetItem={headingBackground} color={colors.heading_background_color} updateColor={updateColor} />
            <WidgetItem widgetItem={headingFontColor} color={colors.heading_font_color} updateColor={updateColor} />
          </div>
          <div className="w-[697px] text-white text-base font-bold font-['DM Sans'] leading-normal mb-[18px]">Chat Window</div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <WidgetItem widgetItem={bodyColor} color={colors.body_color} updateColor={updateColor} />
            <WidgetItem widgetItem={fontColor} color={colors.font_color} updateColor={updateColor} />
            <WidgetItem widgetItem={primaryElementsColor} color={colors.cta_color} updateColor={updateColor} />
            <WidgetItem widgetItem={secondaryElementsColor} color={colors.cta_font_color} updateColor={updateColor} />
            <WidgetItem widgetItem={chatBubble} color={colors.bubble_background_color} updateColor={updateColor} />
          </div>
        </div>
        <div className="md:col-span-1 sm:col-span-1">
          <div className="panel flex-1 py-[25px] px-6 h-full w-full rounded-xl flex-col justify-between items-start inline-flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
