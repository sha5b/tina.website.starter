import Link from "next/link";
import Head from "next/head";

export const Layout = (props) => {
  return (
    <div style={{padding: '5rem'}}>
      <Head>
        <title>Telesis</title>
        <meta name="description" content="Telesis - Actively shaping the future" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </header>
      <main>{props.children}</main>
    </div>
  );
};
