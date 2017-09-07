import Author from './Author'

export default class AuthorRepository {
  private authors: Author[]

  public constructor() {
    this.authors = []
  }

  public save(author: Author): void {
    this.authors.push(author)
  }

  public findBySurname(surname: string): Author[] {
    return this.authors.filter((item) => {
      return item.surname === surname
    })
  }

  public findAll(): Author[] {
    return this.authors
  }

  public delete(author: Author): void {
    this.authors.splice(this.authors.indexOf(author), 1)
  }
}
