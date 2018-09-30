import { Row, Col } from 'antd'
import Reserve from './icons/reserve'
import Brochure from './icons/brochure'
import Diagram from './icons/diagram'
import Announce from './icons/announce'

const styles = {
  iconStyle: {
    width: 80,
    height: 80,
    padding: 10
  },
  colStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    textAlign: 'center',
  }
}

const Shortcut = () => (
  <Row>
    <Col style={styles.colStyle} xs={24} md={6}>
      <Reserve style={styles.iconStyle}/>
      <h2>จองเวลาเรียน</h2>
      <div>สำหรับนักเรียน S.E.L.F สามารถจองเวลาเรียนได้</div>
    </Col>
    <Col style={styles.colStyle} xs={24} md={6}>
      <Brochure style={styles.iconStyle}/>
      <h2>โบชัวร์</h2>
      <div>คอร์สเรียนตามช่วงเวลาล่าสุด</div>
    </Col>
    <Col style={styles.colStyle} xs={24} md={6}>
      <Diagram style={styles.iconStyle}/>
      <h2>แผนผังการเรียน</h2>
      <div>โครงสร้างการเรียนและรายละเอียดในแต่ละรายวิชา</div>
    </Col>
    <Col style={styles.colStyle} xs={24} md={6}>
      <Announce style={styles.iconStyle}/>
      <h2>ประกาศคะแนนสอบ</h2>
      <div>ประกาศคะแนนสอบของรายวิชาที่มีการสอบ</div>
    </Col>
  </Row>
)

export default Shortcut
