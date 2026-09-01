import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Projects from '../../src/components/Projects'

describe('Projects filtering', () => {
  it('filters projects by category and restores the complete list', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    expect(screen.getAllByRole('article')).toHaveLength(5)

    await user.click(screen.getByRole('button', { name: 'E-commerce' }))

    await waitFor(() => expect(screen.getAllByRole('article')).toHaveLength(2))
    const filteredProjects = screen.getAllByRole('article')
    expect(filteredProjects).toHaveLength(2)
    expect(within(filteredProjects[0]).getByText('Fabrics E-commerce Website')).toBeInTheDocument()
    expect(within(filteredProjects[1]).getByText('Cedaré')).toBeInTheDocument()
    expect(screen.queryByText('VisionQC')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'All' }))
    await waitFor(() => expect(screen.getAllByRole('article')).toHaveLength(5))
  })
})
