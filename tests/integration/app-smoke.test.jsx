import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../../src/App'

describe('Portfolio application', () => {
  it('renders the complete page and persists theme changes', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(document.querySelector('h1')).toHaveTextContent('Khaled Hussein.')
    expect(document.querySelector('#photos')).toBeInTheDocument()
    expect(document.querySelector('#projects')).toBeInTheDocument()
    expect(document.querySelector('#contact')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to dark theme' }))

    await waitFor(() => expect(document.documentElement).toHaveClass('dark'))
    expect(localStorage.getItem('portfolio-theme')).toBe('dark')
  })
})
