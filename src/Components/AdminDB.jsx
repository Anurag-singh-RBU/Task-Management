import React, {useContext , useState} from 'react'
import {AuthContext} from '../../context/Auth';

const AdminDB = () => {

// eslint-disable-next-line no-unused-vars
const [userData , setData] = useContext(AuthContext);
const [task , setTask] = useState(null);
const [emp , setEmp] = useState(null);
const [date , setDate] = useState(null);
const [type , setType] = useState(null);
const [para , setPara] = useState(null);

const submitHandle = (e) => {
    e.preventDefault();

    const newTask = {category : type , date : date , discription : para , title : task};
    const work = [...userData[0].tasks , newTask]
    console.log(work); 

    // userData.map(user =>{
    //     if (user.firstName === emp){
    //         return {
    //             ...user,
    //             tasks: [...(user.tasks || []), newTask],
    //         };
    //     }
    //     return user;
    // });

    // setData(userData);
    // console.log(userData);

};

const logOut = () =>{

    localStorage.setItem('loggedIn' , '');
    window.location.reload();

}

return (
    <>
       <div className='h-35 w-full flex justify-between'>
            <div className='h-auto w-50 flex flex-col justify-center gap-2'>
                <span className='text-3xl font-extrabold text-white ml-10'>Hello</span>
                <span className='text-3xl font-extrabold text-white ml-9'>Anurag 👋</span>
            </div>
            <div className='flex justify-center items-center'>
            <button id = 'logout' onClick = {logOut} className='h-10 w-25 rounded-md mr-10'>Log Out</button>
            </div>
        </div>

        <form onSubmit = {submitHandle}>
        <div id = 'outer' className='mr-10 ml-10 flex h-[380px] justify-between w-auto rounded-md'>
            <div id = 'inputs' className='m-8 flex flex-col h-auto w-[500px]'>
                <span className='sentence'>Task Title</span>
                <input value = {task} onChange = {(e) => setTask(e.target.value)} id='user' type='text' className='h-8 rounded-md px-2 border-white border-1 mt-1 mb-5' placeholder='Make a UI design'>
                </input>
                <span className='sentence'>Date</span>
                <input value = {date} onChange = {(e) => setDate(e.target.value)} id='user' type='date' className='h-8 rounded-md px-2 border-white border-1 mt-1 mb-5'></input>
                <span className='sentence'>Assign To</span>
                <input value = {emp} onChange = {(e) => setEmp(e.target.value)} id='user' type='text' className='h-8 rounded-md px-2 border-white border-1 mt-1 mb-5' placeholder='Employee Name'>
                </input>
                <span className='sentence'>Category</span>
                <input value = {type} onChange = {(e) => setType(e.target.value)} id = 'user' type='text' className='h-8 rounded-md px-2 border-white border-1 mt-1 mb-3' 
                placeholder='Design , Devlopment etc'></input>
            </div>
            <div id = 'inner' className='mr-10 ml-50 flex flex-col justify-between h-[380px] w-[650px] rounded-md p-5 pt-10'>
                <span className='sentence'>Discription</span>
                <textarea value = {para} onChange = {(e) => setPara(e.target.value)}id = 'dis' className='h-[300px] w-full border-1 rounded-md border-white mt-1 mb-5 pl-2 py-2 font-light text-[12px] align-text-top'/>
                <button className='h-[50px] w-full rounded-md mb-6'>Create Task</button>
            </div>
        </div>
        </form>

            <div id = 'main' className='h-10 w-auto mt-5 mx-10 rounded-md flex justify-between'>
                <div className = "h-10 w-auto mb-2 mx-5 rounded-md text-center leading-10">Employee</div>
                <div className = "h-10 w-auto mb-2 mx-5 rounded-md text-center leading-10">Task</div>      
                <div className = "h-10 w-auto mb-2 mx-5 rounded-md text-center leading-10">Status</div>      
            </div>

        {userData && userData.length > 0 ? (userData.map(function(idx){

            return <div key = {idx} id = 'footer' className='flex flex-col h-[380px] w-auto rounded-md p-5 pt-4'>
            <div id = 'one' className='h-10 w-auto mb-2 mx-5 rounded-md flex justify-between'>
                <div className = "h-10 w-auto mb-2 mx-5 rounded-md text-center leading-9">{userData[0].firstName}</div>
                <div className = "h-10 w-auto mb-2 mx-5 rounded-md leading-9">{userData[0].tasks[0].title}</div>      
                <div className = "h-10 w-auto mb-2 mx-5 rounded-md text-center leading-9">Active</div>      
            </div>
            </div>

        })) : (<h1 className='text-center whitespace-nowrap text-white'>No Employees are Available</h1>)}

    </>

    )
  
}

export default AdminDB