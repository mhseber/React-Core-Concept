// export default function ToDo({ name, isDone }) {
//   return (
//     <div style={{ color: "red" }}>
//       <h1>My To Do List</h1>
//       <p> 1. {name}</p>
//     </div>
//   );
// }

export default function ToDo({ name, isDone }) {
  if (isDone === true) {
    return (
      <div style={{ color: "green" }}>
        <h1>My To Do List</h1>
        <p> 1. {name}</p>
      </div>
    );
  }
}
