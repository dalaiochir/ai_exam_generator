import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <h2>Automatic Exam Creation Platform</h2>
      <p>Create A/B version MCQ exams with answers</p>

      <Link href="/generate" className="btn">
        Generate Exam
      </Link>
    </div>
  );
}
