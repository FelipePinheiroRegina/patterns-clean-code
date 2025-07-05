import { useState } from "react";
import { Button } from "./Button";

export function PureComponent() {
    const [todo, setTodo] = useState<string[]>([])

    return (
        <main>
            <h1>Pure Component Example</h1>
            <p>This is an example of a pure component in React.</p>
            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Button onCreateTodo={() => setTodo([...todo, `Todo ${todo.length + 1}`])} />
        </main>
    );
}