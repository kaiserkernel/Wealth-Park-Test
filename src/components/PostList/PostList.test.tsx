import { render, screen } from '@testing-library/react'

import PostList from './PostList'

describe('Post List', () => {
  const DATA = {
    data: {
      pageParams: [],
      pages: [[{
        by: 'mmastrac',
        descendants: 10,
        id: 34783447,
        kids: [34784221, 34784342, 34784198, 34783951, 34783941],
        score: 77,
        time: 1676335246,
        title: 'Google’s Fully Homomorphic Encryption Compiler – A Primer',
        type: 'story',
        url: 'https://jeremykun.com/2023/02/13/googles-fully-homomorphic-encryption-compiler-a-primer/',
      }]]
    },
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
