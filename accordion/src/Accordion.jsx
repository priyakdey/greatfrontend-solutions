import { useState } from "react";

export default function Accordion({ title, content }) {
  const [ isClosed, setIsClosed ] = useState(true);

  return (
    <div className="accordion">
      <div
        className="accordion-title"
        onClick={() => setIsClosed(!isClosed)}
      >
        {title}{" "}
        <span
          aria-hidden={true}
          className={isClosed ? "accordion-icon" : "accordion-icon accordion-icon--rotated"}
        />
      </div>
      {
        !isClosed && (<div className="accordion-content">{content}</div>)
      }
    </div>
  );
}
