import Link from 'next/link';
import App from '../components/App'


// When you hit the Back button, it navigates the page to the
// index page entirely via the client; next/link does all the
// location.history handling for you.
//You don't need to write even a single line of client-side routing code.
const Index = () => {
  return (
    <div>
      <App />
      <Link href="/about">
          {/*<a  style={{ fontSize: 20 }}>About Page</a>*/}
        <button  style={{ fontSize: 20 }}>About Page</button>
      </Link>
    </div>
  );
}

export default Index;