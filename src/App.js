import React, { useState } from "react";
import "./App.css";
import Introduction from "./components/introduction";
import Profile from "./components/profile";
function App() {
  const [tambah, setTambah] = useState(0);
  console.log(tambah);
  if (tambah < 0) {
    setTambah(0);
  }
  return (
    <div>
      <h1>{tambah}</h1>
      <button onClick={() => setTambah((prev) => prev - 1)}>
        Kurang 1 Poin
      </button>
      <button onClick={() => setTambah((prev) => prev + 1)}>
        Tambah 1 Poin
      </button>
      <Profile />
      <Introduction name="bagas" />
      <Introduction name="ana" />
    </div>
  );
}

export default App;
