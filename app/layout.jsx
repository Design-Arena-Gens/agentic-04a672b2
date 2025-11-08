export const metadata = {
  title: "AI????????????? | ????????",
  description: "???????????????????AI????????????",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header className="container">
          <div className="nav">
            <a href="/" className="brand">AI Consulting Playbook</a>
            <nav>
              <a href="/" className="nav-link">???</a>
              <a href="/roi" className="nav-link">ROI??</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer container">? {new Date().getFullYear()} AI Consulting</footer>
      </body>
    </html>
  );
}
