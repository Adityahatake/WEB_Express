function RenderList() {
  const students = [
    { id: 1, name: "Aadiee", age: 18 },
    { id: 2, name: "Alex", age: 20 },
    { id: 3, name: "Sam", age: 17 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student List</h1>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} — {student.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderList;
