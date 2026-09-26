export default function Home() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>Dynamic Firebase Test</h1>

      <p>
        This website uses Firebase App Hosting, Next.js and Firestore.
      </p>

      <p>
        Test page:
      </p>

      <a href="/condition/diabetes">
        Open Diabetes Page
      </a>
    </main>
  );
}
