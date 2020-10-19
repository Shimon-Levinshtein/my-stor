export const changePagination = (obj) => {
    return { type: 'CHANGE_ALL_PAGINATION', payload: obj };
}

export const changeTargetPagination = (obg) => {
    return { type: 'CHANGE_PAGINATION', payload: obg };
}
