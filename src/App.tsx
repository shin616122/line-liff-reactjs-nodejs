import { useEffect, useState } from "react";
import liff from "@line/liff";
// @ts-ignore
import CalendarTemplate from "availability-calendar-react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [availability, setAvailability] = useState([]);
  const Calendar = CalendarTemplate({
    availability,
    setAvailability,
  });

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

  return (
    <div className="App">
      <h1>create-liff-app</h1>
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
      <Calendar />
    </div>
  );
}

export default App;
