import React, { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    name: "승민",
    title: "개발자",
    mentors: [
      {
        name: "동동주",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
      {
        name: "티나",
        title: "시니어개발자",
      },
    ],
  });

  const ClickMentorNameChange = () => {
    const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
    const current = prompt("이름을 무엇으로 바꾸고 싶은가요?");

    if (person.mentors.name === prev) {
      setPerson((prev) => [
        ...prev,
        { name: current, title: person.mentors.title },
      ]);
    }
  };

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => {
          return (
            <li key={index}>
              {mentor.name} ({mentor.title})
            </li>
          );
        })}
      </ul>
      <button onClick={ClickMentorNameChange}>멘토의 이름 바꾸기</button>
    </div>
  );
}
