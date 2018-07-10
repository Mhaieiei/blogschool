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
          <Col span={12}>
            <img
              src= {require('../static/images/siberian.png?url')}
              style={{
                width: 300,
                height: 300,
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