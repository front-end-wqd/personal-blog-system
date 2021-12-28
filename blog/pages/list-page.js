import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Wqd_Header from '../components/Wqd_Header';
import Wqd_Menu from '../components/Wqd_Menu';
import Wqd_List from '../components/Wqd_List';
import Wqd_Author from '../components/Wqd_Author';
import Wqd_ScrollToTop from '../components/Wqd_ScrollToTop';
import { Row, Col } from 'antd';

export default function ListPage() {
  const [type, setType] = useState("");

  useEffect(() => {
    // 去除头部的问号
    let str = location.search.slice(1);
    let arr = str.split("&");
    setType(arr[0].split("=")[1]);
  }, []);

  return (
    <div>
      <Head>
        <title>wqd</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wqd_Header />
      <Wqd_Menu activeKey={type} />
      <Row className="main">
        <Col className="main-left">
          <Wqd_List />
        </Col>
        <Col className="main-right">
          <Wqd_Author />
        </Col>
      </Row>
      <Wqd_ScrollToTop />
    </div>
  )
}
