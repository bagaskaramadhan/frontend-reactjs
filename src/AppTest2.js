import React, { useEffect, useState } from "react";
import "./App.css";
import Introduction from "./components/introduction";
import Profile from "./components/profile";
import Home from "./pages/Home";
function App() {
  const [tambah, setTambah] = useState(0);
  const [nama, setNama] = useState("");
  if (tambah < 0) {
    setTambah(0);
  }

  useEffect(() => {
    if (tambah === 5) {
      setNama("Bagaskara");
    } else if (tambah < 5) {
      setNama("Ana");
    } else {
      setNama("???");
    }
  }, [tambah]);

  return (
    <div>
      <Home />
      <h1>{tambah}</h1>
      <h1>nama pengguna: {nama}</h1>
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
