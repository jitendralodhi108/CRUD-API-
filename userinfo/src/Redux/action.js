

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