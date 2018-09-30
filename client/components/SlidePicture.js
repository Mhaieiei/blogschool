import React, { Component } from 'react'
import { Carousel } from 'antd'

const styles = {
  carouselStyle: {
    width: '100%',
    height: '600px'
  }
}

class SlidePicture extends Component {
  render() {
    return (
      <Carousel style={styles.carouselStyle} autoplay>
        {/* <div><img src="images/siberian.png"/>1</div>
        <div><img src="images/siberian.png"/>2</div>
        <div><img src="images/siberian.png"/>3</div>
        <div><img src="images/siberian.png"/>4</div> */}
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    )
  }
}

export default SlidePicture
