import React from 'react'

export default function Checkbox({className,text, ...restProps}) {
    return (
        <>
        <label className={className}>
            <input type="checkbox" {...restProps} />
            <span>{text}</span>
        </label>
        </>
    )
}
