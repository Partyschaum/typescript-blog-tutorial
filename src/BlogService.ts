import Article from './Article'
import ArticleRepository from './ArticleRepository'
import Author from './Author'
import AuthorRepository from './AuthorRepository'

export default class BlogService {
  public constructor(private articleRepository: ArticleRepository, private authorRepository: AuthorRepository) { }

  public createAuthor(forename: string, surname: string): Author {
    const author = new Author(forename, surname)
    this.authorRepository.save(author)
    return author
  }

  public createArticle(author: Author, headline: string, content: string): Article {
    const article = new Article({author, headline, content})
    this.articleRepository.save(article)
    return article
  }
}
