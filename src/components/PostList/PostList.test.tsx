import { render, screen } from '@testing-library/react'

import PostList from './PostList'

describe('Post List', () => {
  const DATA = {
    data: { pages: [] },
  }

  it('renders correctly', () => {
    const { container } = render(<PostList {...DATA} />)
    expect(container).toMatchSnapshot()
  })

  it('renders PostList', () => {
    render(<PostList {...DATA} />)

    const postList = screen.getByTestId('post-list')

    expect(postList).toBeInTheDocument()
  })
})
