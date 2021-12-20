import React from 'react';
import styles from '../styles/components/Header.module.scss';
import { Row, Col, Menu } from 'antd';
import { TrophyTwoTone, CodeTwoTone } from '@ant-design/icons';

const Header = () => {
    return (
        <div className={styles.header}>
            <Row>
                <Col flex="auto" className={styles["header-name"]}>
                    <TrophyTwoTone style={{fontSize: '1.5em'}} twoToneColor="#1890ff" />
                    <span className={styles["header-name-text"]}>前端开发吴彦祖</span>
                </Col>
                <Col>
                    <Menu mode="horizontal">
                        <Menu.Item key="css" icon={<CodeTwoTone twoToneColor="#1890ff" />}>
                        你不知道的css
                        </Menu.Item>
                        <Menu.Item key="js" icon={<CodeTwoTone twoToneColor="#1890ff" />}>
                        你不知道的js
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    );
}

export default Header;