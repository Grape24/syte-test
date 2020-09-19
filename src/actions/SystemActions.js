export function loading() {
    return { type: 'LOADING_START' }
}
export function doneLoading() {
    return { type: 'LOADING_DONE' }
}

export function errorHandler(error){
    return { type: 'SET_ERROR',
            error }
}