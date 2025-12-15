"use client";
import { useState } from "react";
import ExamForm from "@/components/ExamForm";

export default function GeneratePage() {
  const [exam, setExam] = useState(null);

  async function generateExam(data) {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setExam(await res.json());
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Generate Exam</h2>
      <ExamForm onGenerate={generateExam} />

      {exam && (
        <pre className="bg-white p-4 mt-4 rounded">
          {JSON.stringify(exam, null, 2)}
        </pre>
      )}
    </div>
  );
}
