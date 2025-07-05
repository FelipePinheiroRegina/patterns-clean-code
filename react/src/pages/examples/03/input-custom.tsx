// Input de customização. Não recomendado porque esse componente pode crescer e ficar muito complexo com varias variações

import type { ReactNode } from "react"

interface InputProps {
    label: string
    leftIcon?: ReactNode
    icon?: ReactNode
}

export function Input({ label, icon = null, leftIcon = null }: InputProps) {
    return (
        <div>
            {label ? <label>{label}</label> : null}
            {leftIcon}
            <input type="text" />
            {icon}
        </div>
    )
}