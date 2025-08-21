import { useState, type FormEvent } from "react";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodo(event: FormEvent) {
    event.preventDefault();
    if (newTodo.trim() === "") {
      return;
    }
    console.log("New Todo:", newTodo);
    setNewTodo("");
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="Novo to-do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
