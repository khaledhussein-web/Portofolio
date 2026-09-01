import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import PhotoSlider from '../../src/components/PhotoSlider'

describe('Project photo galleries', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders one independent carousel for each project gallery', () => {
    render(<PhotoSlider />)

    expect(screen.getAllByRole('region', { name: /images$/ })).toHaveLength(3)
    expect(screen.getByText('Immersive Brand Homepage')).toBeInTheDocument()
    expect(screen.getByText('Personalized Skincare Home')).toBeInTheDocument()
    expect(screen.getByText('Fabric Applications')).toBeInTheDocument()
  })

  it('moves a gallery forward with its own next button', () => {
    render(<PhotoSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Show next Cedaré image' }))
    expect(screen.getByAltText('Cedaré product collection page with handmade bags')).toBeInTheDocument()
    expect(screen.getByAltText('Skincare AI Assistant homepage with local weather recommendations')).toBeInTheDocument()
  })

  it('automatically advances after three seconds', () => {
    vi.useFakeTimers()
    render(<PhotoSlider />)

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByAltText('Cedaré product collection page with handmade bags')).toBeInTheDocument()
    expect(screen.getByAltText('Skincare assessment page with quick actions')).toBeInTheDocument()
    expect(screen.getByAltText('StageWare acoustic masking and blackout fabric catalog')).toBeInTheDocument()
  })
})
