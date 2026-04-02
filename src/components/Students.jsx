import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, removeStudent, setAllAttendance } from "../redux/studentSlice";

export default function Students() {
  const [name, setName] = useState("");
  const studentList = useSelector((state) => state.students.list);
  const darkMode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addStudent(name));
      setName("");
    }
  };

  const handleSetAllAttendance = () => {
    if (window.confirm("Barcha talabalar davomati 'Keldi' deb belgilansinmi?")) {
      dispatch(setAllAttendance("Keldi"));
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
        minHeight: "100vh",
        color: darkMode ? "white" : "black",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Talabalar boshqaruvi</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Talaba ismini yozing..."
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "2px solid #3b82f6",
            flex: "1",
            fontSize: "16px",
            color: "black",
            backgroundColor: "white",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "12px 25px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Qo'shish
        </button>
        <button
          onClick={handleSetAllAttendance}
          style={{
            padding: "12px 25px",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Barchasini Belgilash
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {studentList &&
          studentList.map((st) => (
            <div
              key={st.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
                backgroundColor: darkMode ? "#1f2937" : "white",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                border: darkMode ? "1px solid #374151" : "1px solid #e5e7eb",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  color: darkMode ? "white" : "#111",
                }}
              >
                {st.name}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  backgroundColor: st.attendance ? "#d1fae5" : "#f3f4f6",
                  color: st.attendance ? "#065f46" : "#6b7280",
                  fontWeight: "500",
                }}
              >
                {st.attendance ? st.attendance : "Belgilanmagan"}
              </span>
              <button
                onClick={() => dispatch(removeStudent(st.id))}
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                O'chirish
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}