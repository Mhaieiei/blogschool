
// import Link from 'next/link';
import { Layout } from 'antd'
import NavBar from '../components/NavBar'


const { Content } = Layout

// When you hit the Back button, it navigates the page to the
// index page entirely via the client; next/link does all the
// location.history handling for you.
//You don't need to write even a single line of client-side routing code.
const About = () => {
  return (
    <Layout>
      <NavBar />
      <Content>
        <h1> About Page </h1>
      </Content>
    </Layout>
  );
}

export default About;