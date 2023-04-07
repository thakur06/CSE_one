import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
export default function Api() {
    type Usertype={
        id:number;
        first_name:string;
        last_name:string;
        email:string;
        avatar:string

    }
    const [data, setdata] = useState<Usertype[]>([]);

        useEffect(()=>{
fetch("https://reqres.in/api/users?page=2").then(res=>res.json()
    
).then((res)=>{
    console.log(res)
    setdata(res.data);
})
        },[])
    
  return (
    <table style={{margin:"auto"}} border={1} >
        <thead>
<tr>
    <th>Link</th>
    <th>avatar</th>
    <th>email</th>
    <th>id</th>
    <th>f_name</th>
    <th>l_name</th>
</tr>

        </thead>
        <tbody>
        {data.map((data,index)=>(
            <tr key={index}>

            <td><Link to={`/suser/${data.id}`} >view</Link></td>
            <td><img src={data.avatar}/></td>
            <td>{data.email}</td>
            <td>{data.id}</td>
            <td>{data.first_name}</td>
            <td>{data.last_name}</td>
            
            </tr>
        ))}
        </tbody></table>
  )
}
