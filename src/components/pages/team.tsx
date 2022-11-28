import React, { useEffect } from 'react'
import { CardsGrid } from '../organisms/cards-grid/cards-grid'
import TopBar from '../organisms/top-bar/top-bar'
import './team.scss'

const Team = () => {
  return (
    <div className="team">
      <h1 className="team__title">MI EQUIPO</h1>
      <TopBar />
      <CardsGrid />
    </div>
  )
}

export default Team
