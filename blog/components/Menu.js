import React, { useEffect } from 'react';
import styles from '../styles/components/Menu.module.scss';
import { Menu } from 'antd';

const TopMenu = () => {
    useEffect(() => {
        let menu = document.querySelector('#menu');
        window.menuOffsetHeight = menu.offsetHeight;
      }, []);

    return (
        <div id="menu" className={styles["menu"]}>
            <Menu mode="horizontal">
                <Menu.Item key="css">
                welcome to <span className={styles["menu-item"]}>css</span>
                </Menu.Item>
                <Menu.Item key="js">
                welcome to <span className={styles["menu-item"]}>js</span>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default TopMenu;