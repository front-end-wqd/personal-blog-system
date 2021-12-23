import React from 'react';
import styles from '../styles/components/Header.module.scss';
import { TrophyTwoTone } from '@ant-design/icons';

const Wqd_Header = () => {
    const toHome = () => {
        if (window.location.pathname !== "/") {
            window.location.href = "/";
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles["header-name"]} onClick={toHome}>
                <TrophyTwoTone style={{fontSize: '1.5em'}} twoToneColor="#1890ff" />
                <span className={styles["header-name-text"]}>前端开发吴彦祖</span>
            </div>
        </div>
    );
}

export default Wqd_Header;