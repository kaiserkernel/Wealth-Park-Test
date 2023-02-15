import { render, screen } from '@testing-library/react'

import PostListCard from './PostListCard'

describe('Post List Card', () => {
  const POST = {
    post: {
      by: 'mmastrac',
      descendants: 10,
      id: 34783447,
      kids: [34784221, 34784342, 34784198, 34783951, 34783941],
      score: 77,
      time: 1676335246,
      title: 'Google’s Fully Homomorphic Encryption Compiler – A Primer',
      type: 'story',
      url: 'https://jeremykun.com/2023/02/13/googles-fully-homomorphic-encryption-compiler-a-primer/',
    },
  }

  it('renders correctly', () => {
    const { container } = render(<PostListCard {...POST} />)
    expect(container).toMatchSnapshot()
  })

  it('renders PostListCard', () => {
    render(<PostListCard {...POST} />)

    const postListCard = screen.getByTestId('post-list-card')

    expect(postListCard).toBeInTheDocument()
  })
})
