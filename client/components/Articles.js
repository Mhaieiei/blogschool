import React, { Component } from 'react';
import { Link } from '../routes';
import { Row, Col, DemoBox } from 'antd';
import Imageblog from '../static/images/siberian.png?inline';
import '../styles/Article.css';

class Articles extends Component {
  render() {
    return (
      <div>

        <h1 style={{ textAlign:'center', height: '10px'}}> บทความ </h1>
        <h1 style={{ textAlign:'center', color: '#FFA500'}}> ______ </h1>   
        <Row type="flex" justify="space-around" className='blog'>
          <Col span={11} style={{border: '1px solid'}}>
              <Link route='article' params={{id: '1'}}>
                <a>
                  <img
                    src= {Imageblog}
                    style={{
                      width: '100%',
                      height: 300,
                      marginBottom: '10px',
                    }}
                  />
                  <div className='title_blog'>
                    <h3> หัวเรื่องข่าวสาร/บทความ </h3>
                    <p style={{marginBottom: 0}}>01/01/18</p>
                    รายละเอียดเนื้อหาาาาาากดาพนาดนพำาเนพำเานำพาเนำพเ่าำนพเ่าำรพนเ่รพำเ้ืำร้นพเืรพนำเืำรนพ
                  </div>
                </a>
              </Link>
          </Col>

          <Col span={12} style={{paddingLeft: '30px',paddingRight: '30px'}} >
            <Row type="flex" justify="space-between" >
              <Col span={11} style={{border: '1px solid'}}>
                <Link route='article' params={{id: '2'}}>
                  <a>
                    <img
                      src= {require('../static/images/siberian.png?inline')}
                      style={{
                        width: '100%',
                        height: 145,
                        marginBottom: '10px',
                      }}
                    />
                    <div className='title_blog'>
                      <h3> หัวเรื่องข่าวสาร/บทความ </h3>
                      <p style={{marginBottom: 0}}>01/01/18</p>
                    </div>
                  </a>
                </Link>
                </Col>
                <Col span={11} style={{ border: '1px solid'}}>
                  <img
                    src= {require('../static/images/siberian.png?inline')}
                    style={{
                      width: '100%',
                      height: 145,
                      marginBottom: '10px',
                    }}
                  />
                  <div className='title_blog'>
                    <h3> หัวเรื่องข่าวสาร/บทความ </h3>
                    <p style={{marginBottom: 0}}>01/01/18</p>
                  </div>
                </Col>
                <Col span={11} style={{ border: '1px solid', marginTop:'5px'}}>
                  <img
                    src= {require('../static/images/siberian.png?inline')}
                    style={{
                      width: '100%',
                      height: 145,
                      marginBottom: '10px',
                    }}
                  />
                  <div className='title_blog'>
                    <h3> หัวเรื่องข่าวสาร/บทความ </h3>
                    <p style={{marginBottom: 0}}>01/01/18</p>
                  </div>
                </Col>
                <Col span={11} style={{ border: '1px solid', marginTop:'5px'}}>
                  <img
                    src= {require('../static/images/siberian.png?inline')}
                    style={{
                      width: '100%',
                      height: 145,
                      marginBottom: '10px',
                    }}
                  />
                  <div className='title_blog'>
                    <h3> หัวเรื่องข่าวสาร/บทความ </h3>
                    <p style={{marginBottom: 0}}>01/01/18</p>
                  </div>
                </Col>
              
            </Row>
          </Col>
            <Link route='about'>
              <a><h3 style={{marginTop: '25px', color: 'black'}}>...เพิ่มเติม</h3></a>
            </Link>
        </Row>
      </div>
    );
  }
}

export default Articles;