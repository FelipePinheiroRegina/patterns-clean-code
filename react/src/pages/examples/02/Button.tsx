// exemplo de componente puro, funciona independente de qualquer contexto

interface ButtonProps {
    onCreateTodo: VoidFunction
}

export function Button({ onCreateTodo }: ButtonProps) {
    return (
        <button onClick={onCreateTodo}>
            Click Me
        </button>
    );
}