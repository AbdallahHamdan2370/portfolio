import React from "react";

export default function CourseReflection() {
  return (
    <div className="min-h-screen padding flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold font-jose text-secondary">Course Reflection</h1>

      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
        This is a sample reflection paragraph.  
        You can describe what you learned, how the course impacted your thinking,
        challenges you faced, and your future goals.
      </p>

      <img
        src="/imgs/sample-reflection.jpg"
        alt="Reflection"
        className="rounded-2xl w-full max-w-xl shadow-lg"
      />
    </div>
  );
}
