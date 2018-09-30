import Link from 'next/link'

const styles = {
  headerStyle: {
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: '1',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    // flexDirection: 'row',
    width: '100%',
    // lineHeight: '64px',
    // boxShadow: '0px 5px 20px #ddd',
  },
  navText: {
    padding: '0px 20px',
  }
}

const NavBar = () => (
  <div style={styles.headerStyle}>
    <img alt="HMS_logo" src="client/public/images/logo.png" />
    <Link href="/">
      <h5 style={styles.navText}>หน้าแรก</h5 >
    </Link>
    <Link href="/about">
      <h5 style={styles.navText}>เกี่ยวกับเรา</h5 >
    </Link>
    <Link href="/">
      <h5 style={styles.navText}>บทความ</h5 >
    </Link>
    <Link href="/">
      <h5 style={styles.navText}>แผนผังการเรียน</h5 >
    </Link>
    <Link href="/">
      <h5 style={styles.navText}>จองเวลาเรียน</h5 >
    </Link>
    <Link href="/">
      <h5 style={styles.navText}>ทำเนียบเด็กเก่ง</h5 >
    </Link>
    <Link href="/">
      <h5 style={styles.navText}>ประกาศคะแนนสอบ</h5 >
    </Link>
    <Link href="/">
      <h5 style={styles.navText}>ติดต่อเรา</h5 >
    </Link>
  </div>
)

export default NavBar
