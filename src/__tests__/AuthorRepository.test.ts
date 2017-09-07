import Author from '../Author'
import AuthorRepository from '../AuthorRepository'

describe('AuthorRepository', () => {
  let repository: AuthorRepository

  beforeEach(() => {
    repository = new AuthorRepository()
  })

  it('saves an author', () => {
    const author = new Author('Tom', 'Tasty')
    repository.save(author)
  })

  it('finds author by surname', () => {
    const author = new Author('Tom', 'Tasty')
    repository.save(author)
    expect(repository.findBySurname('Tasty')).toEqual([author])
  })

  it('finds all authors', () => {
    const author1 = new Author('Tom', 'Tasty')
    const author2 = new Author('Tim', 'Toasty')
    repository.save(author1)
    repository.save(author2)
    expect(repository.findAll()).toEqual([
      author1,
      author2,
    ])
  })

  it('deletes author', () => {
    const author1 = new Author('Tom', 'Tasty')
    const author2 = new Author('Tim', 'Toasty')
    repository.save(author1)
    repository.save(author2)
    repository.delete(author1)
    expect(repository.findAll()).toEqual([author2])
  })
})
