import Nav from "@/components/nav";
import { getAllArticles } from "@/lib/article";
import Splash from "@/components/splash";
import linksData from "@/data/links.json";

export default function Home() {
  const articles = getAllArticles();

  return (
    <>
      <section>
        <p>Software Engineer, DevOps</p>
        <p>jshultz.biz@outlook.com</p>
        <Splash/>
      </section>

      <div style={{ display: "flex", gap: "5%" }}>
        <Nav links={linksData} />

        <ul id="articles-container">
          <h3>Articles</h3>
          {articles.map((article) => (
            <li key={article.filename} className="article-item">
              <h2>
                <a href={`/article-viewer/${article.filename}`}>{article.title}</a>
              </h2>
              <span>{article.date}</span>
              <p>{article.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}