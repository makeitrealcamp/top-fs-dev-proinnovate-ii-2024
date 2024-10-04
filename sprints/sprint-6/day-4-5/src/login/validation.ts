export const validNumberCharacters = (value: string, min: number, max: number) => {
    return value.length >= min && value.length <= max
}

export const validEmail = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return emailRegex.test(value)
}

export const validatePassword = (value: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return passwordRegex.test(value)
}