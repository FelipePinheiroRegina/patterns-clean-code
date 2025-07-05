// Pattern de composição. Recomendado pois são componentes isolados e voce escolhe o que quer usar na hora de compor o input


export function Root({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )   
}

export function FormField() {
    return <input type="text" />
}

export function Label(props: React.HTMLAttributes<HTMLLabelElement>) {
    return (
        <label {...props}/>        
    )
}

export function Icon({ children }: {children: React.ReactNode}) {
    return ( 
        <>
        {children}
        </>
    )
}