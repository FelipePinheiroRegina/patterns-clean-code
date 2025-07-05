// Quando você tem uma parte do código que usa uma lógica javascript, e essa lógica pertence a apenas um html da página, faz sentido você quebrar em um componente


export function FirstExample() {
    // const currentYear = new Date().getFullYear()

    return (
        <main>
            <h1>First Example</h1>
            <p>This is the first example of a React component.</p>

            {/* <footer>
                felipe pinheiro &copy; {currentYear}
            </footer> */}

            <Footer /> 
        </main>
    )
}

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            felipe pinheiro &copy; {currentYear}
        </footer>
    )
}