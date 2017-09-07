import Article from './Article'
import Author from './Author'

export default class ArticleRepository {
  private articles: Article[]

  public constructor() {
    this.articles = []
  }

  public save(article: Article) {
    this.articles.push(article)
  }

  public findByAuthor(author: Author) {
    return this.articles.filter((item) => {
      return item.author === author
    })
  }

  public findAll() {
    return this.articles
  }

  public delete(article: Article) {
    this.articles.splice(this.articles.indexOf(article), 1)
  }
}
