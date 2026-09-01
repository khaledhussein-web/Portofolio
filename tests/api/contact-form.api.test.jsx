import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Contact from '../../src/components/Contact'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

async function completeContactForm(user) {
  await user.type(screen.getByLabelText('Name'), 'Test Client')
  await user.type(screen.getByLabelText('Email'), 'client@example.com')
  await user.type(screen.getByLabelText('Subject'), 'Portfolio project')
  await user.type(screen.getByLabelText('Message'), 'I would like to discuss a new website.')
}

describe('Contact form API integration', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  it('submits the expected form contract and handles a successful response', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ success: true }),
    })
    const user = userEvent.setup()
    render(<Contact />)
    await completeContactForm(user)

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    await waitFor(() => expect(fetch).toHaveBeenCalledOnce())
    const [endpoint, options] = fetch.mock.calls[0]
    const payload = Object.fromEntries(options.body.entries())

    expect(endpoint).toBe(WEB3FORMS_ENDPOINT)
    expect(options.method).toBe('POST')
    expect(options.body).toBeInstanceOf(FormData)
    expect(payload).toMatchObject({
      name: 'Test Client',
      email: 'client@example.com',
      subject: 'Portfolio project',
      message: 'I would like to discuss a new website.',
      from_name: 'Khaled Hussein Portfolio',
    })
    expect(payload.access_key).toBeTruthy()
    expect(await screen.findByText('Thanks! Your message was sent successfully.')).toBeInTheDocument()
  })

  it('shows the API error and preserves the form when submission fails', async () => {
    fetch.mockResolvedValue({
      ok: false,
      json: vi.fn().mockResolvedValue({ success: false, message: 'API unavailable' }),
    })
    const user = userEvent.setup()
    render(<Contact />)
    await completeContactForm(user)

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(await screen.findByText('API unavailable')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveValue('Test Client')
  })
})
