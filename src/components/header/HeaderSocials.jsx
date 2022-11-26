import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
 
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://leetcode.com" target="_blank"><SiLeetcode/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
    </div>

  )
}

export default HeaderSocials
