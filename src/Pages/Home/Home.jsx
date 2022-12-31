import React from 'react'
import Body from '../../components/Body/Body'
import Header from '../../components/Header/Header'
import Orders from '../../components/Orders/Orders'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <Header/>
      <Body/>
      <Orders/>
    </div>
  )
}

export default Home