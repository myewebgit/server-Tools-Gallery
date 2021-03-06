import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import UserRow from "./UserRow";

const Users =()=>{
    const {data:users,  isLoading, refetch} = useQuery('users', ()=>fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>res.json())); 
    if(isLoading){
        return<Loading></Loading>
    }
    return (
        <div>
		<h1 className="text-2xl" > All Users:{users.length} </h1>
        <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>SL</th>
        <th>Name</th>
        <th>Status</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map((user,index) =><UserRow
          key={user._id}
          user={user}
          index={index}
          refetch={refetch}
          ></UserRow>)
      }
     
     
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Users;
