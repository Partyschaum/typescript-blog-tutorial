import Article from '../Article'
import Author from '../Author'

describe('Article', () => {
  it('has headline and content', () => {
    const headline = 'some fancy headline'
    const content = 'very important article text'
    const author = new Author('Tom', 'Tasty')

    const article = new Article({headline, content, author})

    expect(article.headline).toEqual(headline)
    expect(article.content).toEqual(content)
    expect(article.author).toBe(author)
  })
})
