import { useEffect, useState } from 'react';

import classNames from "classnames/bind";
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import images from '~/assets/images';
import Search from '../Search';


const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'English',
                            },
                            {
                                type: 'language',
                                code: 'vi',
                                title: 'Tiếng Việt',
                            },
                        ],
                    },
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {

    
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':

                break;
            default:
        }
    };

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok" />
            </div>
            <Search></Search>
            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="https://png.pngtree.com/thumb_back/fw800/background/20230523/pngtree-sad-pictures-for-desktop-hd-backgrounds-image_2690576.jpg"
                        ></Image>
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div >
    </header >;
}

export default Header;