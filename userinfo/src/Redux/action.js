import axios from "axios"

export const ShowUser = (id) => {
    return async(dispatch) =>{
        const resp = await axios.get(`https://reqres.in/api/users/${id}`);
        const {data : {data}} = resp
        return dispatch(showuser(data))
    }
}

export const UserList = () => {
    return async(dispatch) => {
        const resp = await axios.get('https://reqres.in/api/users?page=1');
        const {data : {data}} = resp
        return dispatch(userlist(data))
    }
}

export const UpdateInfo = (id,dataa) => {
  return async(dispatch) => {
    const resp = await axios.post(`https://reqres.in/api/users/${id}`, dataa, { 'Content-Type': 'application/json' })
    const {data} = resp;
    return dispatch(updatebyid(data))
  }
}
 
export const userlist =(data)=>{
    return({
        type:"saveusers",
        payload:data
    })
}

export const showuser = (data)=>{
    return ({
        type:"showuser",
        payload:data
    })
}

export const deletbyid = (data)=>{
    return({
        type:"delete",
        payload:data
    })
}

export const updatebyid = (data)=>{ 
    return ({
        type:'updatbyid',
        payload:data
    })
}