import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Menu.module.scss';
import { Menu } from 'antd';

const Wqd_Menu = () => {
    const [activeKey, setActiveKey] = useState("");

    // 计算menu高度
    useEffect(() => {
        let menu = document.querySelector('#menu');
        window.menuOffsetHeight = menu.offsetHeight;
    }, []);

    // 设置menu激活的item
    useEffect(() => {
        // todo
    }, []);

    const toPage = (e) => {
        switch(e.key) {
            case "css":
                window.location.href = "/css-page";
                break;
            case "js":
                window.location.href = "/js-page";
                break;
        }
    }

    return (
        <div id="menu" className={styles["menu"]}>
            <Menu mode="horizontal" onClick={toPage} selectedKeys={activeKey}>
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

export default Wqd_Menu;