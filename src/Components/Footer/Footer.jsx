import React, { Component } from 'react'
import Style from './Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <div className={Style.footer}>
        <div className={`'container' ${Style.bg}`}>
          <div className={`'row' ${Style.firstSec} ${Style.row}`}>
            <div className='col-md-4 text-light text-center'>
              <h3 className={`'m-0' ${Style.headLights}`}>LOCATION</h3>
              <p className={Style.locpara}>2215 John Daniel Drive <br />
                Clark, MO 65243
              </p>
            </div>
            <div className='col-md-4 text-light text-center'>
              <h3 className={`'m-0' ${Style.headLights}`}>AROUND THE WEB</h3>
              <div className={`${Style.circle}`}>
                <i class={`fa-brands fa-facebook-f ${Style.socials}`}></i>
              </div>
              <div className={`${Style.circle}`}>
                <i class={`fa-brands fa-twitter ${Style.socials}`}></i>
              </div>
              <div className={`${Style.circle}`}>
                <i class={`fa-brands fa-linkedin-in ${Style.socials}`}></i>
              </div>
              <div className={`${Style.circle}`}>
                <i class={`fa-brands fa-dribbble ${Style.socials}`}></i>
              </div>
            </div>
            <div className='col-md-4 text-light text-center'>
              <h3 className={`'m-0' ${Style.headLights}`}>ABOUT FREELANCER</h3>
              <p className={Style.locpara}>Freelance is a free to use, MIT<br />
              licensed Bootstrap theme created by <br />
              Route
              </p>
            </div>
          </div>
        </div>
        <div className={Style.secondSec}>
            <p className='text-light text-center m-0'>Copyright © Your Website 2021</p>
        </div>
      </div>
    )
  }
}
