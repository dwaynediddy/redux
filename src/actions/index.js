export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const decrement = (dnr) => {
    return {
        type: 'DECREMENT',
        payload: dnr
    }
}