export const add = (text) => {
    return async (dispatch) => {
        dispatch(toggleUpdate())
        try {
            return dispatch({
                type: 'ADD_TODO',
                payload: text
            })
        }
        catch (error) {
            console.log(error)
        } finally {
            dispatch(toggleUpdate())
        }
    }
}

export const getTodos = () => {
    return {
        type: 'GET_TODOS',
    }
}

export const filterT = () => {
    return {
        type: 'FILTER_TODO'
    }
}

export const toggleUpdate = () => {
    console.log('toggleUpdate')
    return {
        type: 'TOGGLE_UPDATE'
    }
}

export const delteT = (id) => {
    return async (dispatch) => {
        dispatch(toggleUpdate())
        try {
            return dispatch({
                type: 'DELETE_TODO',
                payload: id
            })
        }
        catch (error) {
            console.log(error)
        } finally {
            dispatch(toggleUpdate())
        }
    }
}