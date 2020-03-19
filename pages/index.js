import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    <style jsx>
      {`
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </li>
);

const PLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
    <style jsx>
      {`
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </li>
);

export default function Index() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js." />
        <PostLink title="Learn Next.js is awesome." />
        <PostLink title="Deploy apps with Zeit." />

        <PLink id="안녕 넥스트 제이에스." />
        <PLink id="넥스트 제이에스를 배우세요. 굉장합니다." />
        <PLink id="차이트로 배포하세요." />
      </ul>
      <style jsx>
        {`
          h1,
          a {
            font-family: "Arial";
          }
          ul {
            padding: 0;
          }
        `}
      </style>
    </Layout>
  );
}
