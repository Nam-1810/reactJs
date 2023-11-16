import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => { 
        setShowResult(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    return (<HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>Accounts</h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </PopperWrapper>
            </div>
        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input value={searchValue}
                ref={inputRef}
                placeholder="Search account and video...."
                spellCheck='false'
                onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue && <button className={cx('clear')} onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            }

            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    </HeadlessTippy>);
}

export default Search;