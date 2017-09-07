import Article from '../Article'
import ArticleRepository from '../ArticleRepository'
import Author from '../Author'

describe('ArticleRepository', () => {
  let repository: ArticleRepository

  beforeEach(() => {
      repository = new ArticleRepository()
    })

  it('saves an article', () => {
      const author = new Author('Tom', 'Tasty')
      const article = new Article({ author, content: 'some content', headline: 'some headline' })
      repository.save(article)
    })

  it('finds article by author', () => {
      const author = new Author('Tom', 'Tasty')
      const article = new Article({ author, content: 'some content', headline: 'some headline' })
      repository.save(article)
      expect(repository.findByAuthor(author)).toEqual([article])
    })

  it('finds all articles', () => {
      const author1 = new Author('Tom', 'Tasty')
      const article1 = new Article({ author: author1, content: 'some content', headline: 'some headline' })
      const author2 = new Author('Tom', 'Tasty')
      const article2 = new Article({ author: author2, content: 'some content', headline: 'some headline' })
      repository.save(article1)
      repository.save(article2)
      expect(repository.findAll()).toEqual([
        article1,
        article2,
      ])
    })

  it('deletes author', () => {
      const author1 = new Author('Tom', 'Tasty')
      const article1 = new Article({ author: author1, content: 'some content', headline: 'some headline' })
      const author2 = new Author('Tom', 'Tasty')
      const article2 = new Article({ author: author2, content: 'some content', headline: 'some headline' })
      repository.save(article1)
      repository.save(article2)
      repository.delete(article1)
      expect(repository.findAll()).toEqual([article2])
    })
})
