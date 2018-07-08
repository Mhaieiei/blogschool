import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Imageblog from './siberian.png';
import '../styles/Article.css';

class Article extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign:'center'}}> บทความ </h1>
        <Row className='blog'>
          <Col span={12}>
            บทความ 1
            <img
              src={require('./siberian.png')}
              style={{
                width: 150,
                height: 46,
                paddingTop: '20px',
                marginBottom: '40px',
              }}
            />
          </Col>
          <Col span={12}>
            col-12
          </Col>
        </Row>
      </div>
    );
  }
}

export default Article;