import React, { useState } from 'react';
import styles from '../styles/components/List.module.scss';
import { CalendarOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';
import { List } from 'antd';

const Wqd_List = () => {
    const [list] = useState([
        {
            title: '你不知道的css',
            description: '你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的'
        },
        {
            title: '你不知道的css',
            description: '你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的'
        },
        {
            title: '你不知道的css',
            description: '你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的'
        },
        {
            title: '你不知道的css',
            description: '你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的'
        },
        {
            title: '你不知道的css',
            description: '你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的你不知道的'
        },
    ]);

    return (
        <div className={styles.list}>
            <List
                header={<div style={{fontWeight: 500, fontSize: 'calc(1em + 1em / 4)'}}>最新文章</div>}
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <div className={styles["article-title"]}>{item.title}</div>
                        <div className={styles["article-information"]}>
                            <span><CalendarOutlined style={{marginRight: 2}} />2021-12-20</span>
                            <span><TagOutlined style={{marginRight: 2}} />css</span>
                            <span><UserOutlined style={{marginRight: 2}} />123</span>
                        </div>
                        <div>{item.description}</div>
                    </List.Item>
                )} />
        </div>
    );
}

export default Wqd_List;