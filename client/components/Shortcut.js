import { Row, Col } from 'antd'
import styled from 'styled-components'
// import Announce from './icons/announce'

const Box = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
`

const Shortcut = () => (
  <Row>
    <Box xs={24} md={6}>
      {/* <Announce /> */}
      <div style={{width: 32, height: 32, backgroundColor: '#000', padding: 10}}/>
      <h2>จองเวลาเรียน</h2>
      <div>สำหรับนักเรียน S.E.L.F สามารถจองเวลาเรียนได้</div>
    </Box>
    <Box xs={24} md={6}>
      {/* <Announce /> */}
      <div style={{width: 32, height: 32, backgroundColor: '#000', padding: 10}}/>
      <h2>โบชัวร์</h2>
      <div>คอร์สเรียนตามช่วงเวลาล่าสุด</div>
    </Box>
    <Box xs={24} md={6}>
      {/* <Announce /> */}
      <div style={{width: 32, height: 32, backgroundColor: '#000', padding: 10}}/>
      <h2>แผนผังการเรียน</h2>
      <div>โครงสร้างการเรียนและรายละเอียดในแต่ละรายวิชา</div>
    </Box>
    <Box xs={24} md={6}>
      {/* <Announce /> */}
      <div style={{width: 32, height: 32, backgroundColor: '#000', padding: 10}}/>
      <h2>ประกาศคะแนนสอบ</h2>
      <div>ประกาศคะแนนสอบของรายวิชาที่มีการสอบ</div>
    </Box>
  </Row>
)

export default Shortcut
