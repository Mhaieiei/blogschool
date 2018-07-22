


// When you hit the Back button, it navigates the page to the
// index page entirely via the client; next/link does all the
// location.history handling for you.
//You don't need to write even a single line of client-side routing code.
const Article = (props) => (
    <div>
      <div>{props.id}</div>
      <h1> Article </h1>
    </div>
)

Article.getInitialProps = async ({query}) => {
  console.log('initial props', query.id)
  return { id: query.id }
}

export default Article;