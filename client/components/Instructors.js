import React, { Component } from 'react';
import { Link } from '../routes';
import { Row, Col, DemoBox } from 'antd';
import Imageblog from '../static/images/teacher.jpg?inline';


class Instructors extends Component {
  render() {
    return (
      <div style = {{ marginTop: '30px'}}>
        <h1 style={{ textAlign:'center', height: '10px'}}> ครูผู้สอน </h1>
        <h1 style={{ textAlign:'center', color: '#FFA500'}}> ______ </h1>   
        <Row gutter={48} style= {{ paddingTop: '20px'}}>
          <Col span={8} style= {{ textAlign: 'center'}}> 
          <img
              src= {Imageblog}
              style={{
                width: '80%',
                height: 250,
                borderRadius: '50%',
                marginBottom: '20px',
              }}
            /> 
            <div>
              <h3 style={{ marginBottom: '1em'}}> "คณิตศาสตร์มีชีวิต... คณิตศาสตร์อาจารย์โต้ง"</h3>
              <h2 style={{ marginBottom: '0px'}}>อ. โต้ง</h2>
              <h3>คณิตศาสตร์</h3>
            </div>
          </Col>
          <Col span={8} style= {{ textAlign: 'center'}}> 
          <img
              src= {Imageblog}
              style={{
                width: '80%',
                height: 250,
                borderRadius: '50%',
                marginBottom: '20px',
              }}
            /> 
            <div>
              <h3 style={{ marginBottom: '1em'}}> "คณิตศาสตร์มีชีวิต... คณิตศาสตร์อาจารย์โต้ง"</h3>
              <h2 style={{ marginBottom: '0px'}}>อ. โต้ง</h2>
              <h3>คณิตศาสตร์</h3>
            </div>
          </Col>
          <Col span={8} style= {{ textAlign: 'center'}}> 
           <img
              src= {Imageblog}
              style={{
                width: '80%',
                height: 250,
                borderRadius: '50%',
                marginBottom: '20px',
              }}
            /> 
            <div>
              <h3 style={{ marginBottom: '1em'}}> "คณิตศาสตร์มีชีวิต... คณิตศาสตร์อาจารย์โต้ง"</h3>
              <h2 style={{ marginBottom: '0px'}}>อ. โต้ง</h2>
              <h3>คณิตศาสตร์</h3>
            </div>
          </Col>
        </Row>
        <Link route='about'>
          <a><h3 style={{marginTop: '25px', color: 'black', textAlign: 'center'}}>...เพิ่มเติม</h3></a>
        </Link>
      </div>
    );
  }
}

export default Instructors;