"use client";
import "../styles/form.css";
import { useState } from "react";

export default function ExamForm({ onGenerate }) {
  const [subject, setSubject] = useState("AI");
  const [difficulty, setDifficulty] = useState("Easy");
  const [count, setCount] = useState(10);

  return (
    <div className="form">
      <label>Subject</label>
      <select onChange={e => setSubject(e.target.value)}>
        <option>AI</option>
        <option>Machine Learning</option>
        <option>Programming</option>
      </select>

      <label>Difficulty</label>
      <select onChange={e => setDifficulty(e.target.value)}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <label>Question Count</label>
      <input
        type="number"
        value={count}
        onChange={e => setCount(e.target.value)}
      />

      <button className="btn" onClick={() => onGenerate({ subject, difficulty, count })}>
        Generate Exam
      </button>
    </div>
  );
}
