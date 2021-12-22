import React from 'react';
import styles from '../styles/components/Header.module.scss';
import { Menu } from 'antd';
import { TrophyTwoTone, CodeTwoTone } from '@ant-design/icons';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles["header-name"]}>
                <TrophyTwoTone style={{fontSize: '1.5em'}} twoToneColor="#1890ff" />
                <span className={styles["header-name-text"]}>前端开发吴彦祖</span>
            </div>
            <div className={styles["header-menu"]}>
                <Menu mode="horizontal">
                    <Menu.Item key="css">
                    welcome to <span className={styles["header-menu-item"]}>CSS</span>
                    </Menu.Item>
                    <Menu.Item key="js">
                    welcome to <span className={styles["header-menu-item"]}>JS</span>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}

export default Header;