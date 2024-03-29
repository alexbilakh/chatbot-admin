import { FC } from 'react';

interface IconArrayLeftProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconArrayLeft: FC<IconArrayLeftProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow-square-left">
                <path
                    id="Shape"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 1C6.40137 1 4.32218 1.5136 2.91789 2.91789C1.5136 4.32218 1 6.40137 1 9V15C1 17.5986 1.5136 19.6778 2.91789 21.0821C4.32218 22.4864 6.40137 23 9 23H15C17.5986 23 19.6778 22.4864 21.0821 21.0821C22.4864 19.6778 23 17.5986 23 15V9C23 6.40137 22.4864 4.32218 21.0821 2.91789C19.6778 1.5136 17.5986 1 15 1H9ZM3 9C3 6.59863 3.4864 5.17782 4.33211 4.33211C5.17782 3.4864 6.59863 3 9 3H15C17.4014 3 18.8222 3.4864 19.6679 4.33211C20.5136 5.17782 21 6.59863 21 9V15C21 17.4014 20.5136 18.8222 19.6679 19.6679C18.8222 20.5136 17.4014 21 15 21H9C6.59863 21 5.17782 20.5136 4.33211 19.6679C3.4864 18.8222 3 17.4014 3 15V9ZM13.9683 9.1761C14.3583 8.78503 14.3574 8.15186 13.9663 7.76189C13.5753 7.37192 12.9421 7.37282 12.5521 7.7639L9.03213 11.2939C8.64294 11.6842 8.64294 12.3158 9.03213 12.7061L12.5521 16.2361C12.9421 16.6272 13.5753 16.6281 13.9663 16.2381C14.3574 15.8481 14.3583 15.215 13.9683 14.8239L11.1524 12L13.9683 9.1761Z"
                    fill="white"
                />
            </g>
        </svg>
    );
};

export default IconArrayLeft;
