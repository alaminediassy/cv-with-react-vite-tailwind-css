import React from 'react'

const NavBar = () => {
  return (
      <div>
        <div className='navBar flex justify-between items-center p-[3rem]'>

            <div className="logoDiv">
              <h1 className="logo text-[25px] text-orangeColor cursor-pointer"><strong>Curriculum</strong>-Vitae</h1>
            </div>

            <div className="menu flex gap-8">
                <li className="menuList text-[#6f6f6f] hover:text-orangeColor">Profil</li>
                <li className="menuList text-[#6f6f6f] hover:text-orangeColor">Formation</li>
                <li className="menuList text-[#6f6f6f] hover:text-orangeColor">Expériences</li>
                <li className="menuList text-[#6f6f6f] hover:text-orangeColor">Compétences</li>
                <li className="menuList text-[#6f6f6f] hover:text-orangeColor">Langues</li>
                <li className="menuList text-[#6f6f6f] hover:text-orangeColor">contact</li>
            </div>
        </div>
      </div>
  )
}

export default NavBar
