import React, { useEffect } from 'react'
import { CardsGrid } from '../organisms/cards-grid/cards-grid'
import TopBar from '../organisms/top-bar/top-bar'
import './team.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectPlayers } from '../../store/selectors'

const Team = () => {
  const players = useAppSelector(selectPlayers)

  return (
    <div className="team">
      <h1 className="team__title">MI EQUIPO</h1>
      <TopBar />
      <CardsGrid />
      <span>{JSON.stringify(players)}</span>
    </div>
  )
}

export default Team
