import Link from 'next/link';


// When you hit the Back button, it navigates the page to the
// index page entirely via the client; next/link does all the
// location.history handling for you.
//You don't need to write even a single line of client-side routing code.
const Index = () => {
  return (
    <div>
      <h1> About Page </h1>
    </div>
  );
}

export default Index;