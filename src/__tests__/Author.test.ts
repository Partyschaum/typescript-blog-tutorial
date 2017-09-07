import Author from '../Author'

describe('Author', () => {
  it('has forename and surname', () => {
    const author = new Author('Tom', 'Tasty')
    expect(author.forename).toBe('Tom')
    expect(author.surname).toBe('Tasty')
  })
})
