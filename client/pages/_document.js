import Document, { Head, Main, NextScript } from 'next/document'

export default class MyCustomDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //   const sheet = new ServerStyleSheet()
  //   const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
  //   const styleTags = sheet.getStyleElement()
  //   return { ...page, styleTags } // return styles collected
  // }

  render() {
    return (
      <html>
        <Head>
          <title>HMS</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}