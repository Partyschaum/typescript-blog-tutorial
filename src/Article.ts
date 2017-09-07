import Author from './Author'

class Article {
  public constructor(private config: Article.Config) { }

  public get headline(): string {
    return this.config.headline
  }

  public get content(): string {
    return this.config.content
  }

  public get author(): Author {
    return this.config.author
  }
}

namespace Article {
  export interface Config {
    headline: string
    content: string
    author: Author
  }
}

export default Article
