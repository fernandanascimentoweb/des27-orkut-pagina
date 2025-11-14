import React from 'react'
import '../styles/profile.css'

import Header from '../components/Header'
import SidebarProfile from '../components/SidebarProfile'
import ProfileInfo from '../components/ProfileInfo'
import FriendsList from '../components/FriendsList'
import CommunitiesList from '../components/CommunitiesList'

const Profile = () => {
  return (
    <div className="container">
      <Header />

      <div className='pulo'>
      <div className="grid-layout">
        <SidebarProfile />
        <ProfileInfo />

        <div className="right-panel">
          <FriendsList />
          <CommunitiesList />
        </div>

      </div>
      </div>
    </div>
  )
}

export default Profile
