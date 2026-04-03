import Nav from "@/components/nav";
import { getAllArticles } from "@/lib/article";
import { rollGreeting } from "@/lib/greeting";
import linksData from "@/data/links.json";

export default function Home() {
  const articles = getAllArticles();
  const greeting = rollGreeting();

  return (
    <>
      <section>
        <p>(wanna-be) SwE, DevOps</p>
        <p>{greeting}</p>
      </section>

      <div style={{ display: "flex", gap: "5%" }}>
        <Nav links={linksData} />

        <ul>
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