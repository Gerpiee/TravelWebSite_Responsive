import React, { useRef } from 'react'
import navCSS from "./../Nav/Nav.module.css"
const Nav = () => {
    const menu = useRef(null);
    const MenuHandler = () => {
        menu.current.classList.toggle(navCSS.activeMenu);
    }
  return (
    <div className={navCSS.Nav_wrapper}>
      <div className={navCSS.logo}>
            <a href='#'>Reise <span>.</span></a>
      </div>
      <ul ref={menu}>
        <li><a href='#home'>Heim</a></li>
        <li><a href='#trips'>Ausflüge</a></li>
        <li><a href='#destinations'>Reiseziele</a></li>
        <li><a href='#searches'>Suchen</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#populardestinations'>Beliebte Reiseziele</a></li>
      </ul>
      <div className={navCSS.nav_btns}>
        <div className={navCSS.search_wrapper}>
            <i className='ri-search-line'></i>
            <input type='text' placeholder='Suchen Ort'></input>

        </div>
        <div className={navCSS.CallBtn}>
            <i className='ri-phone-line'></i>
                <p>+1 45656125656 <small>Rufen Sie Ihr Reisebüro an</small></p>
        </div>
        <i className='ri-menu-2-line' onClick={MenuHandler} id={navCSS.bars}></i>
      </div>
    </div>
  )
}

export default Nav
