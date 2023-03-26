'use client'

import React from 'react'
import { TextField } from '@mui/material'

interface IINPUT {
    label: string
    type: string,
    placeholder: string,
    value?: any,
    autoComplete?: string
    autoFocus?: boolean
    classes?: any
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
    defaultValue?: any
    disabled?: boolean
    error: boolean,
    FormHelperTextProps?: any,
    fullWidth?: boolean,
    helperText?: React.ReactNode,
    id?: string,
    InputLableProps?: any,
    inputProps?: any,
    InputProps?: any,
    inputRef?: any,
    maxRows?: number,
    minRows?: number,
    margin?: 'dense' | 'none' | 'normal'
    multiline?: boolean,
    name?: string,
    onChange?: any,
    required: boolean,
    SelectProps?: any,
    size?: 'small' | 'medium' | undefined
    sx?: any,
    variant: any

}

const Input = (props: IINPUT) => {
    return (
        <TextField {...props} />
    )
}

export default Input
