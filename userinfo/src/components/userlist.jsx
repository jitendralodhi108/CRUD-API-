import React from "react";
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletbyid, UserList, ShowUser } from "../Redux/action";
import { Navigate } from "react-router-dom";


const Userlist = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state)
  const [check, setCheck] = useState()
  const [id, setID] = useState('')
  const [Editid, setEditid] = useState('')
  const [Edit, setEdit] = useState('')
  const [PageVal, setPageVal] = useState(1)

  useEffect(() => {
    dispatch(UserList())
  }, [])

  function handleClick(e) {
    let id = e.target.id
    setID(id)
    dispatch(ShowUser(id))
    setCheck(true)
  }

  const edit = (e) => {
    setEditid(e.target.id)
    setEdit(true)
  }

  const dlt = (id) => {
    const result = data.users[0].filter((item) => item.id !== id)
    dispatch(deletbyid(result))
  }

  const LoadNextPage = (page) => {
    setPageVal(page)
    dispatch(UserList(page))
  }

  const LoadPrevPage = (page) => {
    (page >= 1) ? setPageVal(page - 1) : setPageVal(1);
    setPageVal(page)
    dispatch(UserList(page))
  }

  return (
    <>
      {check ? <Navigate to={`/showprofile/${id}`} /> : ''}
      {Edit ? <Navigate to={`/editprofile/${Editid}`} /> : ''}
      {/* Displaying user names  */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive" data-testid="user-table">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th><span>Photo</span></th>
                      <th><span>ID</span></th>
                      <th><span>Email</span></th>
                      <th className="text-center"><span>First Name</span></th>
                      <th><span>Last Name</span></th>
                      <th><span>Action</span></th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>

                    {data.users.length > 0 && data.users[0].map((data) => {
                      return (
                        <tr>
                          <td>
                            <img style={{ width: "45%" }} src={data.avatar} alt="" />
                          </td>
                          <td>
                            <span className="label label-default">{data.id}</span>
                          </td>
                          <td>
                            <span className="label label-default">{data.email}</span>
                          </td>
                          <td>
                            <span className="label label-default">{data.first_name} </span>
                          </td>
                          <td>
                            <span className="label label-default">{data.last_name}</span>
                          </td>
                          <td >
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"  ></i>
                              <i className="fa fa-search-plus fa-stack-1x fa-inverse" onClick={handleClick} id={data.id}  ></i>
                            </span>

                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fa fa-pencil fa-stack-1x fa-inverse" onClick={edit} id={data.id}></i>
                            </span>
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fa fa-trash-o fa-stack-1x fa-inverse" onClick={() => dlt(data.id)} ></i>
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <button className="page-link" aria-label="Previous" onClick={() => { LoadPrevPage(PageVal - 1) }} disabled={PageVal <= 1}>
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">{PageVal}</a></li>
                  <li className="page-item">
                    <button className="page-link" aria-label="Next" disabled={!data.DataLoaded} onClick={() => { LoadNextPage(PageVal + 1) }}>
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userlist