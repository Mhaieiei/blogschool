import Link from 'next/link'
import styled from 'styled-components'
// import { Layout, Menu, Breadcrumb } from 'antd'

// const { Header } = Layout
const Header = styled.div`
  background-color: white;
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  line-height: 64px;
  box-shadow: 0px 5px 20px #ddd;
`
const NavStyle = styled.div`
  padding: 0px 20px;
  &:hover {
    background: #FFD23C;
    color: #707070;
    cursor: pointer;
  }
`
const Img = styled.img`
  src: url(${props => props.src});
  alt: 'HMS-Logo';
`

const NavBar = () => (
  <Header>
    {/* <Img src="/images/logo.png" /> */}
    <Link href="/">
      <NavStyle>หน้าแรก</NavStyle>
    </Link>
    <Link href="/about">
      <NavStyle>เกี่ยวกับเรา</NavStyle>
    </Link>
    <Link href="/">
      <NavStyle>บทความ</NavStyle>
    </Link>
    <Link href="/">
      <NavStyle>แผนผังการเรียน</NavStyle>
    </Link>
    <Link href="/">
      <NavStyle>จองเวลาเรียน</NavStyle>
    </Link>
    <Link href="/">
      <NavStyle>ทำเนียบเด็กเก่ง</NavStyle>
    </Link>
    <Link href="/">
      <NavStyle>ประกาศคะแนนสอบ</NavStyle>
    </Link>
    <Link href="/">
      <NavStyle>ติดต่อเรา</NavStyle>
    </Link>
  </Header>
)

export default NavBar
