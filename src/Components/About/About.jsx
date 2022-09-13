import React, { Component } from 'react'
import style from './About.module.css'
export default class extends Component {
  render() {
    return (
      <div className={`container text-center text-light ${style.aboutBg}`}>
        <div className="title">
          <h2 className='titAbout'>About</h2>
        </div>
      </div>
    )
  }
}
