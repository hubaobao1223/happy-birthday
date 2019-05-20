

export function setLoveWorldItems(data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_LOVE_WORLD_ITEMS', data: data ,state:getState()})
    }
}

export function addLoveWorldItems(data){
    return (dispatch, getState) => {
        dispatch({ type: 'ADD_LOVE_WORLD_ITEM', data: data,state:getState()})
    }
}

export function setCurrentDetailId(data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_CURRENT_DETAIL_ID', data: data,state:getState()})
    }
}