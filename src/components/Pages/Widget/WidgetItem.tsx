import React, { useState, FC, useEffect } from 'react';
import { widgetPropsI } from '../../../types/widget';
import { SketchPicker } from 'react-color';

interface WidgetItemProps {
  widgetItem: widgetPropsI;
  color?: string;
  updateColor: (type: string, color: string) => void;
}

const WidgetItem: FC<WidgetItemProps> = ({ widgetItem, color, updateColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('');
  useEffect(() => {
    setSelectedColor(color ? color : '#fff');
  }, [color]);
  const openColorPicker = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
    updateColor(widgetItem.type, selectedColor);
  };

  const handleChange = (color1: any) => {
    setSelectedColor(color1.hex);
  };

  return (
    <div className="panel flex-1 py-[25px] px-6 h-[184px] rounded-xl flex-col justify-between items-start inline-flex">
      <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
        <div className="self-stretch text-white text-sm font-bold font-['DM Sans'] leading-normal">{widgetItem.title}</div>
        <div className="self-stretch text-white text-sm font-normal font-['DM Sans'] leading-normal">{widgetItem.content}</div>
      </div>
      {color ? (
        <div className="w-[120px] h-12 relative rounded-md" style={{ background: selectedColor }} onClick={openColorPicker}></div>
      ) : (
        <div role="status" className="max-w-sm animate-pulse mt-6">
          <div className="bg-gray-200  rounded-md  dark:bg-gray-700 w-[120px] h-12 mb-4"></div>
        </div>
      )}

      {displayColorPicker && (
        <div className="absolute z-10 top-40">
          <div className="fixed top-0 left-0 right-0 bottom-0" onClick={handleClose} />
          <div className="absolute top-6 left-6 text-white text-base font-bold font-['DM Sans'] leading-normal flex w-[440px]">
            <span>{widgetItem.title}</span>
            <span className="ml-auto" onClick={handleClose}>
              &times;
            </span>
          </div>
          <SketchPicker color={selectedColor} onChange={handleChange} />
          <div className="absolute w-8 h-8 bg-blue-700 rounded bottom-[42px] right-[124px]"></div>
        </div>
      )}
    </div>
  );
};

export default WidgetItem;
