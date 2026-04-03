import "../styles/globals.css";
import  RadiatingRings  from "@/components/rings"
export const metadata = {
  title: "shultz.foo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-wrapper">
          <RadiatingRings />
        </div>
        <main className="page-content">
          <h1>shultz.foo</h1>
          <div>{children}</div>
          <footer>
            <p>&copy; jacob shultz {new Date().getFullYear()}</p>
          </footer>
        </main>
      </body>
    </html>
  );
}