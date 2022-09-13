import React, { Component } from 'react'
import Style from './Home.module.css'
import user from '../../images/user.jpg'

export default class Home extends Component {
  render() {
    return (
      <>
      <div className={Style.home}>
        <div className={Style.bg}>
            <div className={Style.caps}>
              <img src={user} alt="user" className={Style.imgstyle}/>
              <h1 className={Style.captoin}>START REACT</h1>
              <div className={Style.right}></div>
              <i class="fa-solid fa-star" id={Style.star}></i>
              <div className={Style.left}></div>
              <p className={Style.pinfo}>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
      </div>
      </>
    )
  }
}
