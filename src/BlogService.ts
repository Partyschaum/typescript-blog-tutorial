import Article from './Article'
import ArticleRepository from './ArticleRepository'
import Author from './Author'
import AuthorRepository from './AuthorRepository'

export default class BlogService {
  public constructor(private articleRepository: ArticleRepository, private authorRepository: AuthorRepository) { }

  public createAuthor(forename: string, surname: string) {
    const author = new Author(forename, surname)
    this.authorRepository.save(author)
    return author
  }

  public createArticle(author: Author, headline: string, content: string) {
    const article = new Article({author, headline, content})
    this.articleRepository.save(article)
    return article
  }
}
