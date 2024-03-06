import React, { FC } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Switch from './Forms/Switch';
import IconSettings from './Icon/IconSettings';
import IconPencil from './Icon/IconPencil';
import IconTrashLines from './Icon/IconTrashLines';

interface tableDataProps {
    tableHeadData: any[];
    tableData: any[];
}

const Table: FC<tableDataProps> = ({ tableData, tableHeadData }) => {
    return (
        <table>
            <thead>
                <tr>
                    {tableHeadData.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td>
                                <div className="whitespace-nowrap">{data.name}</div>
                            </td>
                            <td>
                                <Switch />
                            </td>
                            <td>
                                <Switch />
                            </td>
                            <td>
                                <ul className="flex items-center gap-2">
                                    <li>
                                        <Tippy content="Settings">
                                            <button type="button">
                                                <IconSettings className="w-5 h-5 text-primary" />
                                            </button>
                                        </Tippy>
                                    </li>
                                    <li>
                                        <Tippy content="Edit">
                                            <button type="button">
                                                <IconPencil className="text-success" />
                                            </button>
                                        </Tippy>
                                    </li>
                                    <li>
                                        <Tippy content="Delete">
                                            <button type="button">
                                                <IconTrashLines className="text-danger" />
                                            </button>
                                        </Tippy>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
