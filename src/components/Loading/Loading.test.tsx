import { render, screen } from '@testing-library/react'

import Loading from './Loading'

describe('Post List Card', () => {
  const LOADING = {
    loadingText: 'Loading',
    className: '',
  }

  it('renders correctly', () => {
    const { container } = render(<Loading {...LOADING} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Loading', () => {
    render(<Loading {...LOADING} />)

    const loading = screen.getByTestId('loading')

    expect(loading).toBeInTheDocument()
  })
})
