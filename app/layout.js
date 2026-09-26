export const metadata = {
  title: "Dynamic Firebase Test",
  description: "Firebase App Hosting dynamic page test"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
