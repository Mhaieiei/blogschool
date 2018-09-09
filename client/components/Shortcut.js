import { Row, Col } from 'antd'
import styled from 'styled-components'
import Reserve from './icons/reserve'
import Brochure from './icons/brochure'
import Diagram from './icons/diagram'
import Announce from './icons/announce'

const Box = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
`

const styles = {
  iconStyle: {
    width: 80,
    height: 80,
    padding: 10
  }
}

const Shortcut = () => (
  <Row>
    <Box xs={24} md={6}>
      <Reserve style={styles.iconStyle}/>
      <h2>จองเวลาเรียน</h2>
      <div>สำหรับนักเรียน S.E.L.F สามารถจองเวลาเรียนได้</div>
    </Box>
    <Box xs={24} md={6}>
      <Brochure style={styles.iconStyle}/>
      <h2>โบชัวร์</h2>
      <div>คอร์สเรียนตามช่วงเวลาล่าสุด</div>
    </Box>
    <Box xs={24} md={6}>
      <Diagram style={styles.iconStyle}/>
      <h2>แผนผังการเรียน</h2>
      <div>โครงสร้างการเรียนและรายละเอียดในแต่ละรายวิชา</div>
    </Box>
    <Box xs={24} md={6}>
      <Announce style={styles.iconStyle}/>
      <h2>ประกาศคะแนนสอบ</h2>
      <div>ประกาศคะแนนสอบของรายวิชาที่มีการสอบ</div>
    </Box>
  </Row>
)

export default Shortcut
