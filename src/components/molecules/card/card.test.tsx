import { screen, render } from '@testing-library/react'
import { Card } from './card'

describe('Card', () => {
  const imageUrl =
    'https://phantom-marca.unidadeditorial.es/500be06c4056e00a9f691d6c5800f216/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/30/16644896975046.jpg'
  const player = {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    image: imageUrl,
    attack: 99,
    defense: 99,
    skills: 99
  }
  it('should display the player image', () => {
    const { container } = render(<Card {...player} />)
    const image = container.getElementsByClassName('card__image')
    expect(image).toHaveLength(1)
  })
  it('should have two bottows with two images', () => {
    const { container } = render(<Card {...player} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    const icons = container.getElementsByClassName('card__icon')
    expect(icons).toHaveLength(2)
  })
})
