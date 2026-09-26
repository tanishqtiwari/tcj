import { notFound } from "next/navigation";
import { db } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

export default async function ConditionPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const docRef = db.collection("conditions").doc(slug);
  const docSnap = await docRef.get();

  if (!docSnap.exists) {
    notFound();
  }

  const data = docSnap.data();

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>{data.title || slug}</h1>

      <div
        style={{
          marginTop: "25px",
          fontSize: "18px",
          lineHeight: "1.7",
          whiteSpace: "pre-wrap"
        }}
      >
        {data.content || "No content available."}
      </div>
    </main>
  );
}
