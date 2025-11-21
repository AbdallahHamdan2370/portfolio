import React from "react";

export default function About() {
  return (
    <div className="min-h-screen padding flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold font-jose text-secondary">About Me</h1>

      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
        This is a sample paragraph describing who you are, your background,
        your values, your passions, and what makes you unique.  
        You can edit this text later with your personal content.
      </p>

      <img
        src="/imgs/sample-about.jpg"
        alt="About"
        className="rounded-2xl w-full max-w-xl shadow-lg"
      />
    </div>
  );
}
