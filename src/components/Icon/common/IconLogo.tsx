import { FC } from 'react';

interface IconLogoProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconLogo: FC<IconLogoProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 7">
                <g id="Group 13">
                    <path
                        id="Union"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.1642 19.6116C27.9783 19.6026 27.8002 19.5643 27.6334 19.5022L27.6338 19.5026C26.8797 20.3852 25.9713 21.1085 24.9634 21.6423C24.51 21.8825 24.0371 22.0844 23.5493 22.2453C25.2426 23.3001 26.7141 24.2233 27.9498 25.1579C28.3591 23.3735 28.4454 21.4963 28.1642 19.6116ZM13.4896 17.5859C13.9821 16.7228 14.5475 15.9128 15.1759 15.1615C14.2386 13.5275 13.8122 11.9775 13.8965 10.5134C13.9856 8.96803 14.6389 7.53556 15.8547 6.21635C15.4712 6.48308 15.1107 6.7834 14.7791 7.11301C13.7372 8.14753 12.9729 9.47611 12.6254 10.9902C12.4898 11.8896 12.4473 12.8019 12.5008 13.711C12.5531 14.6046 12.6968 15.4961 12.9343 16.3721L12.9663 16.4592C13.1131 16.8509 13.2885 17.2274 13.4896 17.5859ZM15.6781 15.9722C15.0627 16.7384 14.5147 17.566 14.0449 18.4474C14.5081 19.0765 15.0572 19.6338 15.6715 20.1044C16.8997 21.044 18.3923 21.6388 19.9982 21.7724C20.3963 21.8054 20.7919 21.8096 21.1832 21.7859C21.1978 21.7842 21.2124 21.7824 21.227 21.7807L21.1436 21.7157C20.905 21.5291 20.6875 21.3549 20.4981 21.1967C20.1161 20.8812 19.7467 20.5609 19.394 20.2337C19.0344 19.8998 18.6837 19.5522 18.3462 19.1886C17.257 18.0822 16.3678 17.0098 15.6781 15.9722ZM22.4144 21.5381L22.314 21.4756C22.1106 21.3221 21.9055 21.1651 21.7001 21.0046C21.5115 20.8566 21.3041 20.6898 21.0749 20.5004H21.0729C20.7168 20.2063 20.3618 19.8982 20.0111 19.5717C19.6658 19.2519 19.3308 18.9199 19.0086 18.5731L19 18.5645C17.9034 17.4508 17.0204 16.3803 16.3518 15.3516L16.2901 15.2564C17.0239 14.4464 17.8382 13.7165 18.7176 13.076C20.8285 11.5389 23.3185 10.522 25.985 10.1693C26.2268 10.8687 26.8903 11.3706 27.6721 11.3706C27.744 11.3706 27.8154 11.3663 27.8857 11.3577C28.115 12.1161 28.2591 12.8956 28.3141 13.6825C28.3238 13.818 28.3308 13.9536 28.3352 14.0894C28.2701 14.7798 28.1291 15.4452 27.9215 16.0762C27.0955 16.233 26.4708 16.9584 26.4708 17.8296C26.4708 18.0935 26.5282 18.3441 26.631 18.5694C25.571 19.995 24.0988 21.0511 22.4144 21.5381ZM13.6009 19.3491C13.4052 19.7787 13.2279 20.2204 13.0694 20.6718L13.0709 20.6707C12.7199 21.8677 12.0505 23.0853 11.0667 24.3225C10.9797 24.4635 10.9176 24.5904 10.8809 24.7041C10.8391 24.8326 10.8313 24.9361 10.8582 25.0134C10.882 25.0841 10.9449 25.1512 11.0445 25.2133C11.1277 25.2657 11.2323 25.3125 11.3585 25.3531C11.3839 25.3617 11.4092 25.3723 11.4331 25.3852L13.1674 26.3181C13.3705 26.4415 13.5376 26.6126 13.6564 26.8118C13.7751 27.0113 13.8469 27.2394 13.8594 27.478C13.8719 27.7147 13.8255 27.9478 13.729 28.1587C13.6403 28.3509 13.5107 28.5243 13.3451 28.6637C13.3299 28.6926 13.3224 28.7414 13.3217 28.7976C13.3205 28.9054 13.3474 29.0159 13.3912 29.1003L13.4002 29.1155C13.4833 29.2596 13.7602 29.2553 14.1574 29.2491L14.1581 29.2491C14.5829 29.2424 15.1021 29.2343 15.7258 29.3772C15.7676 29.3858 15.8086 29.4002 15.848 29.4221C16.0675 29.54 16.1499 29.8142 16.032 30.0344C15.8624 30.3482 15.5509 30.5118 15.203 30.6945L15.2009 30.6956C14.8877 30.8592 14.5311 31.0471 14.3902 31.3427L14.3847 31.3611C14.3738 31.4025 14.4136 31.4669 14.48 31.5384V31.5395C14.6003 31.6708 14.7873 31.7899 14.9861 31.8852L15.0088 31.8957C15.1482 31.9613 15.2915 32.0133 15.42 32.0476C15.5188 32.0738 15.6094 32.1339 15.6727 32.2245C15.9285 32.5869 16.1893 32.963 16.4045 33.3715C16.6302 33.7999 16.8005 34.2553 16.854 34.7474C16.8814 34.9977 16.9114 35.2449 16.9778 35.4437C17.0321 35.6073 17.1145 35.7506 17.2496 35.8522C17.4023 35.9674 17.5812 36.0349 17.7651 36.0541C20.7691 36.2544 25.283 31.3017 26.6021 28.7945C27.0508 27.9408 27.4175 27.0441 27.6959 26.1174C26.3841 25.0763 24.7631 24.0663 22.853 22.8768L22.3367 22.5554C21.5525 22.6999 20.7425 22.7428 19.924 22.6749C18.1436 22.5269 16.4873 21.8661 15.1232 20.8226C14.5624 20.3934 14.0504 19.899 13.6009 19.3491ZM30.0407 17.8292C30.0407 18.529 29.638 19.1351 29.0519 19.4276C30.3397 27.8777 27.8717 31.8243 19.9888 36.2544C19.562 36.4505 19.123 36.6301 18.6727 36.7906C18.3548 36.9359 18.0092 36.9886 17.6734 36.9542C17.3301 36.9191 16.9958 36.7914 16.7084 36.5754C16.4053 36.3478 16.23 36.0545 16.1218 35.7284C16.0249 35.4374 15.9874 35.1402 15.9554 34.8446C15.916 34.4818 15.7828 34.1319 15.6047 33.7941C15.4399 33.4816 15.2333 33.1739 15.0236 32.874C14.8932 32.8318 14.7569 32.7775 14.6225 32.7143L14.5983 32.7018C14.3082 32.5623 14.0235 32.3753 13.8173 32.155C13.5474 31.8637 13.406 31.5169 13.5099 31.1287L13.5181 31.1021C13.5322 31.0553 13.5505 31.008 13.5728 30.96V30.9584C13.7505 30.5812 14.0317 30.339 14.3288 30.1508L14.1715 30.1532L14.1693 30.1532C13.4589 30.1641 12.9655 30.1717 12.6179 29.5701L12.6011 29.5381C12.4859 29.3252 12.4152 29.0503 12.4184 28.7902V28.7875C12.4211 28.5145 12.5012 28.2442 12.6851 28.0423C12.707 28.0185 12.7308 27.997 12.7566 27.9791C12.8218 27.9248 12.8726 27.8584 12.9065 27.7846C12.9429 27.7049 12.9604 27.6159 12.9557 27.5245C12.9514 27.4362 12.9241 27.3515 12.88 27.2769C12.8374 27.2058 12.7777 27.1441 12.7066 27.098L11.0394 26.2022C10.859 26.1412 10.7012 26.0682 10.5657 25.9838C10.2829 25.8073 10.0939 25.5816 10.0006 25.3086C9.90843 25.0419 9.91507 24.747 10.0197 24.426C10.0803 24.239 10.1756 24.0421 10.304 23.8363C10.3197 23.8098 10.3388 23.7859 10.3599 23.7637C11.3612 22.5054 12.0044 21.2834 12.2899 20.0993C12.5652 18.9559 12.5055 17.8397 12.1114 16.7517L12.1032 16.731L12.102 16.7267L12.0837 16.6787C12.0755 16.656 12.0688 16.6334 12.0638 16.6107C11.8084 15.6699 11.6541 14.7147 11.5983 13.7614C11.5408 12.7847 11.5858 11.8091 11.7303 10.8531C11.7334 10.8301 11.7388 10.8082 11.7451 10.7863C12.1333 9.10159 12.9831 7.62382 14.1426 6.47254C14.7631 5.85589 15.4727 5.33258 16.2464 4.92096C16.2358 4.84324 16.2303 4.76436 16.2303 4.68352C16.2303 3.69743 17.0305 2.89801 18.0159 2.89801C18.7811 2.89801 19.4337 3.37994 19.6871 4.05696C19.8912 4.04158 20.0973 4.03376 20.3051 4.03376C23.1829 4.03376 25.7316 5.53372 27.2983 7.83908C27.4187 7.81344 27.5437 7.79995 27.6717 7.79995C28.6574 7.79995 29.4564 8.59976 29.4564 9.58546C29.4564 10.1759 29.1698 10.6993 28.7277 11.0246C28.9909 11.8708 29.1546 12.7417 29.2167 13.6189C29.2788 14.496 29.2397 15.3809 29.0983 16.2561C29.6591 16.5568 30.0407 17.1293 30.0407 17.8292ZM26.7687 8.04495C25.2911 5.94011 22.936 4.58721 20.3051 4.58721C20.1349 4.58721 19.9658 4.59288 19.7981 4.60404C19.7992 4.63013 19.7998 4.65637 19.7998 4.68274C19.7998 5.66844 19.0004 6.46746 18.0151 6.46746C17.6905 6.46746 17.3859 6.38115 17.1235 6.22963C17.0231 6.32101 16.9267 6.41318 16.8325 6.50534C15.5614 7.75778 14.883 9.11096 14.7994 10.5633C14.7299 11.7724 15.067 13.0663 15.8105 14.4441C16.5365 13.6704 17.3316 12.9678 18.1857 12.3461C20.4309 10.7129 23.0791 9.63389 25.9147 9.26757C26.0084 8.7466 26.3281 8.30393 26.7687 8.04495Z"
                        fill="url(#paint0_radial_128_859)"
                    />
                </g>
            </g>
            <defs>
                <radialGradient id="paint0_radial_128_859" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.9884 19.9312) rotate(89.1255) scale(22.3268 13.1764)">
                    <stop offset="0.0678413" stopColor="#C77CFF" />
                    <stop offset="1" stopColor="#5929D5" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default IconLogo;
