import React from "react";
import cr from "../imgs/cr.png";
export default function CourseReflection() {
  return (
    <div className="min-h-screen padding flex flex-col items-center gap-10 mt-28">
      <h1 className="text-5xl font-bold font-jose text-secondary">Course Reflection</h1>
      <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
  The Work Ready Now course is designed to prepare students for real workplace environments 
  by helping them develop essential professional skills. Throughout this course, I explored 
  five key topics that strengthened my understanding of what it means to be work-ready. 
  These topics include Personal Development, Communication Skills, Job Seeking Skills, 
  Workplace Behaviors, and Leadership.</p>
      <img
        src={cr}
        alt="Reflection"
        className="rounded-2xl w-full max-w-xl shadow-lg"
      />
<p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
  • <strong>Personal Development</strong><br />
  The course helped me understand my strengths, interests, and long-term career goals. 
  It showed me the importance of self-awareness, confidence, and continuous learning 
  in both academic and professional life. I learned how personal growth is an ongoing 
  process that shapes success and prepares me for future opportunities.
  <br /><br />

  • <strong>Communication Skills</strong><br />
  This topic improved my ability to express ideas clearly, listen actively, and interact 
  professionally with others. I learned how body language, tone, and respectful communication 
  contribute to effective teamwork and positive workplace relationships. These skills are 
  essential in interviews, group work, and customer interactions.
  <br /><br />

  • <strong>Job Seeking Skills</strong><br />
  I gained practical knowledge on how to write professional CVs, create strong cover letters, 
  and prepare for interviews. I also learned how to search for job opportunities and present 
  myself confidently to employers. These skills will support me in my future career and make 
  me more competitive in the job market.
  <br /><br />

  • <strong>Workplace Behaviors</strong><br />
  This topic taught me about professionalism, punctuality, responsibility, and teamwork. 
  Through observation and activities, I learned how workplace behaviors affect productivity 
  and the overall work environment. Understanding these behaviors helped me see what employers 
  expect from their employees.
  <br /><br />

  • <strong>Leadership</strong><br />
  I learned that leadership is not limited to managers — anyone can lead by taking initiative, 
  solving problems, and supporting others. The course showed me how leaders communicate 
  effectively, motivate teams, and create a positive and productive environment. These qualities 
  will help me grow and take on greater responsibilities in the future.
</p>



    </div>
  );
}
