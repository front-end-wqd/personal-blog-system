import React, { useState } from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import { Row, Col, List } from 'antd';
import { CalendarOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';

export default function Home() {
  const [list, setList] = useState([
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
    <div>
      <Head>
        <title>wqd</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="main">
        <Col className="main-left">
          <List
            header={<div style={{fontWeight: 500, fontSize: 'calc(1em + 1em / 8)'}}>最新文章</div>}
            dataSource={list}
            renderItem={item => (
              <List.Item>
                <div className="article-title">{item.title}</div>
                <div className="article-information">
                  <span><CalendarOutlined style={{marginRight: 2}} />2021-12-20</span>
                  <span><TagOutlined style={{marginRight: 2}} />css</span>
                  <span><UserOutlined style={{marginRight: 2}} />123</span>
                </div>
                <div>{item.description}</div>
              </List.Item>
            )} />
        </Col>
        <Col className="main-right">
        </Col>
      </Row>
    </div>
  )
}
