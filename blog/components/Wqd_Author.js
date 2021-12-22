import React, { useEffect } from 'react';
import styles from '../styles/components/Author.module.scss';
import { Avatar, Divider, Tag } from 'antd';
import { CodepenOutlined, CodeOutlined } from '@ant-design/icons';

const Wqd_Author = () => {
    useEffect(() => {
        let author = document.querySelector("#author");
        author.style.top = window.menuOffsetHeight + 8 + "px";
    }, []);

    return (
        <div id="author" className={styles.author}>
            <div className={styles['author-avatar']}>
                <Avatar size={80} src="\cute.jpeg"></Avatar>
            </div>
            <div className={styles['author-tag']}>
                <Tag color="magenta">wqd</Tag>
                <Tag color="volcano">摇滚乐</Tag>
                <Tag color="cyan">宝可梦</Tag>
                <Tag color="geekblue">摸鱼达人</Tag>
                <Tag color="purple">萨克斯</Tag>
            </div>
            <Divider orientation="center" plain>follow me</Divider>
            <div className={styles['author-link']}>
                <a target="_blank" href="https://codepen.io/wqdwqd">
                    <Tag icon={<CodepenOutlined />} color="#717790">
                        codepen
                    </Tag>
                </a>
                <a target="_blank" href="https://gitee.com/wqd182212">
                    <Tag icon={<CodeOutlined />} color="#fe7300">
                        gitee
                    </Tag>
                </a>
            </div>
        </div>
    );
}

export default Wqd_Author;