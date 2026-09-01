import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Navbar from '../../src/components/Navbar'

describe('Navbar interactions', () => {
  it('opens and closes the mobile navigation menu', async () => {
    const user = userEvent.setup()
    render(<Navbar theme="light" toggleTheme={vi.fn()} />)

    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: 'Close navigation menu' })).toHaveAttribute('aria-expanded', 'true')
    expect(document.body).toHaveStyle({ overflow: 'hidden' })

    await user.click(screen.getByRole('link', { name: 'Projects 02' }))
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false')
    })
  })

  it('delegates theme changes to the application', async () => {
    const user = userEvent.setup()
    const toggleTheme = vi.fn()
    render(<Navbar theme="light" toggleTheme={toggleTheme} />)

    await user.click(screen.getByRole('button', { name: 'Switch to dark theme' }))
    expect(toggleTheme).toHaveBeenCalledOnce()
  })
})
