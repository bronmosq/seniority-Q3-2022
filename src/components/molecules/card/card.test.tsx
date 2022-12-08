import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Player } from '../../../utils/interfaces/player'
import Card from './card'

describe('Card', () => {
  const imageUrl =
    'https://phantom-marca.unidadeditorial.es/500be06c4056e00a9f691d6c5800f216/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/30/16644896975046.jpg'
  const player: Player = {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    image: imageUrl,
    attack: 99,
    defense: 98,
    skills: 97,
    idAuthor: 1,
    idPosition: 1
  }

  const deleteMock = jest.fn()
  const setActivePlayerMock = jest.fn()

  it('should display the image player', () => {
    render(<Card player={player} deletePlayer={deleteMock} setActivePlayer={setActivePlayerMock} />)
    const image = screen.getByAltText(/cristiano ronaldo/i)
    expect(image).toBeInTheDocument()
  })

  it('should display two buttons', () => {
    render(<Card player={player} deletePlayer={deleteMock} setActivePlayer={setActivePlayerMock} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('should display stats', () => {
    render(<Card player={player} deletePlayer={deleteMock} setActivePlayer={setActivePlayerMock} />)

    const attackTitle = screen.getByText(/ataque/i)
    expect(attackTitle).toBeInTheDocument()

    const attackStat = screen.getByText(99)
    expect(attackStat).toBeInTheDocument()

    const defenseTitle = screen.getByText(/defensa/i)
    expect(defenseTitle).toBeInTheDocument()

    const defenseStat = screen.getByText(98)
    expect(defenseStat).toBeInTheDocument()

    const skillsTitle = screen.getByText(/skills/i)
    expect(skillsTitle).toBeInTheDocument()

    const skillsStat = screen.getByText(97)
    expect(skillsStat).toBeInTheDocument()
  })

  it('should execute edit player action', () => {
    render(<Card player={player} deletePlayer={deleteMock} setActivePlayer={setActivePlayerMock} />)
    const modifyButton = screen.getAllByRole('button')[0]
    userEvent.click(modifyButton)
    expect(setActivePlayerMock.mock.calls).toHaveLength(1)
  })

  it('should execute edit delete action', () => {
    render(<Card player={player} deletePlayer={deleteMock} setActivePlayer={setActivePlayerMock} />)
    const deleteButton = screen.getAllByRole('button')[1]
    userEvent.click(deleteButton)
    expect(deleteMock.mock.calls).toHaveLength(1)
  })
})
