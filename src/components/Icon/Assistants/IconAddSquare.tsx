import { FC } from 'react';

interface IconAddSquareProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconAddSquare: FC<IconAddSquareProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16669 1C6.56806 1 4.48887 1.5136 3.08458 2.91789C1.68029 4.32218 1.16669 6.40137 1.16669 9V15C1.16669 17.5986 1.68029 19.6778 3.08458 21.0821C4.48887 22.4864 6.56806 23 9.16669 23H15.1667C17.7653 23 19.8445 22.4864 21.2488 21.0821C22.6531 19.6778 23.1667 17.5986 23.1667 15V9C23.1667 6.40137 22.6531 4.32218 21.2488 2.91789C19.8445 1.5136 17.7653 1 15.1667 1H9.16669ZM3.16669 9C3.16669 6.59863 3.65309 5.17782 4.49879 4.33211C5.3445 3.4864 6.76532 3 9.16669 3H15.1667C17.5681 3 18.9889 3.4864 19.8346 4.33211C20.6803 5.17782 21.1667 6.59863 21.1667 9V15C21.1667 17.4014 20.6803 18.8222 19.8346 19.6679C18.9889 20.5136 17.5681 21 15.1667 21H9.16669C6.76532 21 5.3445 20.5136 4.49879 19.6679C3.65309 18.8222 3.16669 17.4014 3.16669 15V9ZM12.1667 7C12.719 7 13.1667 7.44772 13.1667 8V11H16.1667C16.719 11 17.1667 11.4477 17.1667 12C17.1667 12.5523 16.719 13 16.1667 13H13.1667V16C13.1667 16.5523 12.719 17 12.1667 17C11.6144 17 11.1667 16.5523 11.1667 16V13H8.16669C7.6144 13 7.16669 12.5523 7.16669 12C7.16669 11.4477 7.6144 11 8.16669 11H11.1667V8C11.1667 7.44772 11.6144 7 12.1667 7Z"
                fill="white"
            />
        </svg>
    );
};

export default IconAddSquare;