
import { Link } from '../routes'
import 'antd/dist/antd.css'
import '../styles/App.css'
import NavBar from '../components/NavBar'
import SlidePicture from '../components/SlidePicture'
import Shortcut from '../components/Shortcut'
import Articles from '../components/Articles'
import Instructors from '../components/Instructors'


const styles = {
  license : {
    textAlign: 'center',
    background: '#242424',
    color: '#fff',
    padding: '20px',
  }
}

// When you hit the Back button, it navigates the page to the
// index page entirely via the client; next/link does all the
// location.history handling for you.
//You don't need to write even a single line of client-side routing code.
const Index = () => {
  return (
    <div>
      <NavBar />
      <SlidePicture />
      <Shortcut />
      <Articles />
      <Instructors />
      <div style={{ background: '#ddd', minHeight: 1080 }}>
      </div>
      <div style={styles.license}>
        สงวนลิขสิทธิ์ © 2561 บริษัท เอช.เอ็ม.เอส. กรุ๊ป จำกัด
      </div>
    </div>
  );
}

export default Index;