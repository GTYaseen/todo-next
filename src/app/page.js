"use client";
import styles from "./page.module.css";
import Container from "./components/container/container";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";


export default function Home() {
  let id = "home";
  return (
    <main className={styles.main}>
      <Header id={id}/>
      <Container>
        <div className={styles.title}>
          <h1>Simple ToDo App</h1>
          <p>This todo app for test design.</p>
        </div>
        <Todo />
      </Container>
    </main>
  );
}
