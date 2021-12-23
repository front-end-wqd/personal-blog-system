import React from 'react';
import styles from '../styles/components/ScrollToTop.module.scss';
import { CaretUpOutlined } from '@ant-design/icons';

const Wqd_ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div onClick={scrollToTop} className={styles['to-top']}>
            <CaretUpOutlined />
        </div>
    );
}

export default Wqd_ScrollToTop;