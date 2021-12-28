import React from 'react';
import Head from 'next/head'
import Wqd_Header from '../components/Wqd_Header';
import Wqd_Menu from '../components/Wqd_Menu';
import { Row, Col, Affix } from 'antd';
import { CalendarOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

export default function ArticleDetail() {
  const md = `## a\n` +
  `## b\n` +
  `## c\n` +
  `## d\n` +
  `## e\n` +
  `## f\n` +
  `## g\n` +
  `## h\n` +
  `## i\n` +
  `## j\n` +
  `## k\n` +
  `## l\n` +
  `## m\n` +
  `## n\n` +
  `## o\n` +
  `## p\n` +
  `## q\n` +
  `## r\n` +
  `## s\n` +
  `## t\n` +
  `## u\n` +
  `## v\n` +
  `## w\n` +
  `## x\n` +
  `## y\n` +
  `## z\n`;

  return (
    <div>
      <Head>
        <title>wqd</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wqd_Header />
      <Wqd_Menu activeKey="" />
      <Row className="main">
        <Col className="main-left">
          <div className="article">
            <div className="article-title">你不知道的</div>
            <div className="article-information">
              <span><CalendarOutlined style={{marginRight: 2}} />2021-12-20</span>
              <span><TagOutlined style={{marginRight: 2}} />css</span>
              <span><UserOutlined style={{marginRight: 2}} />123</span>
            </div>
            <div className="article-detail">
              <ReactMarkdown children={md} />
            </div>
          </div>
        </Col>
        <Col className="main-right">
          <Affix offsetTop={window.menuOffsetHeight + 8}>
            <div className="article-navbar">
            <MarkdownNavbar headingTopOffset={0} source={md} ordered={false} />
          </div>
          </Affix>
        </Col>
      </Row>
    </div>
  )
}
