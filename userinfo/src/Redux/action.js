import axios from "axios"

export const ShowUser = (id) => {
    return async (dispatch) => {
        const resp = await axios.get(`https://reqres.in/api/users/${id}`);
        const { data: { data } } = resp
        return dispatch(showuser(data))
    }
}

export const UserList = (page) => {
    return async (dispatch) => {
        const resp = await (page ? axios.get(`https://reqres.in/api/users?page=${page}`) : axios.get(`https://reqres.in/api/users?page=1`));
        const { data: { data } } = resp
        return dispatch(data.length ? userlist(data) : isDataLoaded(false))
    }
}

export const UpdateInfo = (id, dataa) => {
    return async (dispatch) => {
        const resp = await axios.post(`https://reqres.in/api/users/${id}`, dataa, { 'Content-Type': 'application/json' })
        const { data } = resp;
        return dispatch(updatebyid(data))
    }
}

export const userlist = (data) => {
    return ({
        type: 'saveusers',
        payload: data
    })
}

export const showuser = (data) => {
    return ({
        type: 'showuser',
        payload: data
    })
}

export const deletbyid = (data) => {
    return ({
        type: 'delete',
        payload: data
    })
}

export const updatebyid = (data) => {
    return ({
        type: 'updatbyid',
        payload: data
    })
}

export const isDataLoaded = (data) => {
    return ({
        type: 'isDataLoaded',
        payload: data,
    })

}