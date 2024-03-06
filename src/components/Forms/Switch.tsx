import { Link } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
interface SwitchI {
  className?: string;
  defaultChecked?: boolean;
  handleSwitch?: (val: boolean) => void;
}
const Switch: FC<SwitchI> = ({ className, defaultChecked = false, handleSwitch }) => {
  return (
    <div>
      <label className="w-9 h-[20px] relative">
        <input
          type="checkbox"
          className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer"
          id="custom_switch_checkbox1"
          defaultChecked={defaultChecked}
          onChange={(e) => {
            if (handleSwitch) {
              handleSwitch(e.target.checked);
            }
          }}
        />
        <span
          className={`bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-[0.1rem] before:w-4 before:h-4 before:rounded-full peer-checked:before:left-4 peer-checked:bg-primary before:transition-all before:duration-300 ${className}`}
        ></span>
      </label>
    </div>
  );
};

export default Switch;
