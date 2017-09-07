import ArticleRepository from '../ArticleRepository'
import AuthorRepository from '../AuthorRepository'
import BlogService from '../BlogService'

describe('BlogService', () => {
  let service: BlogService
  let articleRepository: ArticleRepository
  let authorRepository: AuthorRepository

  beforeEach (() => {
    articleRepository = new ArticleRepository()
    authorRepository = new AuthorRepository()
    service = new BlogService(articleRepository, authorRepository)
  })

  it('creates an author', () => {
    const author = service.createAuthor('Tom', 'Tasty')
    expect(authorRepository.findAll()).toContain(author)
  })

  it('creates an article', () => {
    const author = service.createAuthor('Tom', 'Tasty')
    const article = service.createArticle(author, 'some fancy headline', 'some important text')
    expect(articleRepository.findAll()).toContain(article)
  })
})
