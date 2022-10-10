import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updatebyid, showuser, ShowUser, UpdateInfo } from "../Redux/action";

const Showprofile = () => {
    const dispatch = useDispatch()
    const storedata = useSelector(state => state)
    const [ data,setData] = useState(storedata.showuser[0])
    const { id } = useParams()
   
    useEffect(() => {
       dispatch(ShowUser(id))
    }, [])

    useEffect(()=>{
        setData(storedata.showuser[0])
       },[storedata])

    const handleChange = (e)=>{
        const value = e.target.value ;
        const keyy = e.target.name
        setData({
            ...data,
            [keyy]: value
        })
    }

    const updatinfo = (id) => {
       dispatch(UpdateInfo(id,data)) 
        // axios.post(`https://reqres.in/api/users/${id}`, data, { 'Content-Type': 'application/json' })
        //     .then(response => {
        //         dispatch(updatebyid(response.data))
        //     });
        console.log(data,'data');
    }
    return (
        <>
            < div class="container my-4 mx-4 emp-profile" >
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            {storedata.showuser.length>0 &&  <img src={storedata.showuser[0]?.avatar} alt="Image" /> }
                        </div>
                    </div>
                    <form>
                        <div class="col-md-12">
                            <div class="profile-head">

                                {/* updataed name  */}
                                {/* {storedata.showuser.length > 0 && storedata.showuser[0]?.first_name} {storedata.showuser.length > 0 && storedata.showuser[0]?.last_name} */}
                                {/* orignal name  */}
                                {storedata.showuser.length > 0 && storedata.showuser[0]?.first_name} {storedata.showuser.length > 0 && storedata.showuser[0]?.last_name}
                                <br />
                                <div class=" my-2 btn-btn-primary text-info" >You can update Detatils here....! </div>
                                <input type='text' name='first_name' placeholder="first_name" value={data?.first_name} onChange={handleChange}></input>
                                <br></br>
                             <input type='text' name="last_name" placeholder="last_name" value={data?.last_name} onChange={handleChange}></input>
                               
                                <br />
                                

                                <h6 class="my-2" >
                                    Web Developer and Designer
                                </h6>
                                <p class="proile-rating">{storedata.showuser.length > 0 && storedata.showuser[0]?.email}</p>
                            </div>
                        </div>
                        <br />


                    </form>


                    {/* <div class="col-md-2">
                            <Link to='/editprofile' class="profile-edit-btn" name="btnAddMore"> Edit profile </Link>
                        </div> */}

                </div>
                <div class="mx-4">    <button type="'submit" class='btn-primary' id="djffff" onClick={() => updatinfo(storedata.showuser[0]?.id)}> save </button>  </div>


                <hr style={{ border: "2px solid black" }} />

                <div class="row">
                    <div class="col-md-4 mx-6">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br />
                            <a href="">Bootsnipp Profile</a><br />
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br />
                            <a href="">Web Developer</a><br />
                            <a href="">WordPress</a><br />
                            <a href="">WooCommerce</a><br />
                            <a href="">PHP, .Net</a><br />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                <div class="row">
                                    <div class="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Kshiti123</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Kshiti Ghelani</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>kshitighelani@gmail.com</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>123 456 7890</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Profession</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Web Developer and Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Experience</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Hourly Rate</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>10$/hr</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Total Projects</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>230</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>English Level</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Availability</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>6 months</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br />
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Showprofile