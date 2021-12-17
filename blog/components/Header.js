import React from 'react';
import styles from '../styles/components/Header.module.scss';
import { Row, Col, Menu } from 'antd';
import Icon from '@ant-design/icons';

const Header = () => {
    return (
        <div className={styles.header}>
            <Row>
                <Col>
                    <span>前端开发吴彦祖</span>
                </Col>
            </Row>
        </div>
    );
}

export default Header;