import React, { useEffect, useRef,} from 'react'
import './Footer.scss'

export default function Footer() {

  const yearNow = () => {
      let year = footeryear.current
      year.innerText = new Date().getFullYear()
  }

  const footeryear = useRef(null)

  useEffect (() => {
      yearNow()
  }, [])


  return (
    <div>
        <div className="footer">
            <div className="footer__box">
                <div className="footer__box-header">
                      &copy; 
                      <span className='footer__box-header-year'
                      ref={footeryear}
                      ></span>
                      &nbsp;
                      Created by Tomasz Słupik
                </div>
            </div>
        </div>
    </div>
  )
}
