import { useEffect } from "react";

export default function GlowCursor() {
  useEffect(() => {
    const cursorCount = 3; // ⭐ change to 5 if you want more
    const cursors = [];

    for (let i = 0; i < cursorCount; i++) {
      const cursor = document.createElement("div");
      cursor.className = "cursor";
      cursor.style.opacity = `${1 - i * 0.3}`;
      cursor.style.transform = `scale(${1 - i * 0.15})`;
      document.body.appendChild(cursor);
      cursors.push(cursor);
    }

    const moveCursor = (e) => {
      cursors.forEach((cursor, index) => {
        setTimeout(() => {
          cursor.style.left = e.clientX - 10 + "px";
          cursor.style.top = e.clientY - 10 + "px";
        }, index * 40); // delay creates trail effect
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursors.forEach((cursor) => document.body.removeChild(cursor));
    };
  }, []);

  return null;
}
