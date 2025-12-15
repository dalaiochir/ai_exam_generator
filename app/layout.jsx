import "../styles/globals.css";

export const metadata = {
  title: "AI Exam Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>🧠 AI Exam Generator</h1>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          © 2025 AI Exam Generator
        </footer>
      </body>
    </html>
  );
}
