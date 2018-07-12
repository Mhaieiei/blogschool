import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Imageblog from '../static/images/siberian.png';
import '../styles/Article.css';

class Article extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign:'center'}}> บทความ </h1>
        <Row className='blog'>
          <Col span={12} style={{border: '1px solid'}}>
            <img
              src= {require('../static/images/siberian.png?inline')}
              style={{
                width: '100%',
                height: 300,
                marginBottom: '10px',
              }}
            />
            <h3> หัวเรื่องข่าวสาร/บทความ </h3>
            <p style={{marginBottom: 0}}>01/01/18</p>
            <p>รายละเอียดเนื้อหาาาาาากดาพนาดนพำาเนพำเานำพาเนำพเ่าำนพเ่าำรพนเ่รพำเ้ืำร้นพเืรพนำเืำรนพ</p>
          </Col>
          <Col span={12} style={{paddingLeft: '30px',paddingRight: '30px'}} >
            <Col span={12} style={{border: '1px solid'}}>
              <img
                src= {require('../static/images/siberian.png?inline')}
                style={{
                  width: '100%',
                  height: 150,
                  marginBottom: '10px',
                }}
              />
              <h3> หัวเรื่องข่าวสาร/บทความ </h3>
            </Col>
            <Col span={12} style={{ border: '1px solid'}}>
              <img
                src= {require('../static/images/siberian.png?inline')}
                style={{
                  width: '100%',
                  height: 150,
                  marginBottom: '10px',
                }}
              />
              <h3> หัวเรื่องข่าวสาร/บทความ </h3>
            </Col>
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default Article;