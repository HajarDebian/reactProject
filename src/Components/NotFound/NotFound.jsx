import React, { Component } from 'react'
import notFound from '../../images/404.png'
import Style from './NotFound.module.css'

export default class NotFound extends Component {
  render() {
    return (
      <img src={notFound} alt="ERROR! page not found" className={Style.notstyle}/>
    )
  }
}
