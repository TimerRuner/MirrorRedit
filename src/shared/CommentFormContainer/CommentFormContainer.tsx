import React, { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, updateComment } from "../../store/store"

import { CommentForm } from "../CommentForm/CommentForm"

export function CommentFormContainer() {
    // const value = useSelector<RootState, string>((state) => state.commentText)
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const [valueTouched, setValueTouched] = useState(false)
    const [valueError, setValueError] = useState("")

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        // dispatch(updateComment(event.target.value))
        setValue(event.target.value)
    }

    function handleBlur() {
        // setValueTouched(true)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setValueTouched(true)

        setValueError(validateValue())

        const isFormValid = !validateValue()
        if (!isFormValid) return

        alert("Form sent")
    }

    function validateValue() {
        if (value.length <= 3) return "Enter more 3 symbols"
        return ""
    }

    return (
        <CommentForm
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            error={valueError}
            touched={valueTouched}
            blur={handleBlur}
        />
    )
}
