import React, {useContext , useState , useEffect} from 'react'
import {AuthContext} from '../../context/Auth';

const ClientDB = ({name}) => {

// eslint-disable-next-line no-unused-vars
const [userData , setData] = useContext(AuthContext);
const [btn , setBtn] = useState("Mark As Completed");
const [fBtn , setfBtn] = useState("Mark As Failed");
const [aBtn , setaBtn] = useState("Accept");

const logOut = () =>{

    localStorage.setItem('loggedIn' , '');
    window.location.reload();

}

useEffect(() => {

    console.log(userData[0].tasks[1]?.title);

})


useEffect(() => {
    
    const savedText = localStorage.getItem("buttonText");
    const second = localStorage.getItem("secondBtn");
    const third = localStorage.getItem("thirdBtn");

    if(savedText){

        setBtn(savedText);

    }

    if(second){

        setfBtn(second);

    }

    if(third){

        setaBtn(third);

    }

}, []);

const mark = () =>{

    setBtn("Completed");
    localStorage.setItem("buttonText", "Completed");

}

const markTwo = () =>{

    setfBtn("Failed");
    localStorage.setItem("secondBtn", "Failed");

}

const markThree = () =>{

    setaBtn("Accepted");
    localStorage.setItem("thirdBtn", "Accepted");

}

return (
    <>
        <div className='h-35 w-full flex justify-between'>
            <div className='h-auto w-50 flex flex-col justify-center gap-2'>
                <span className='text-3xl font-extrabold text-white ml-10'>Hello</span>
                <span className='text-3xl font-extrabold text-white ml-9 w-full'>{name || 'Guest'} 👋</span>
            </div>
            <div className='flex justify-center items-center'>
            <button id = 'logout' onClick = {logOut} className='h-10 w-25 rounded-md mr-10'>Log Out</button>
            </div>
        </div>

        <div className='h-35 w-full flex justify-between gap-4 px-9 mt-10'>

        {userData.filter(emp => emp.firstName === name).map(emp => (
                <>
                    <div id='pehla' className='h-30 font-extrabold w-80 flex flex-col justify-center gap-2 pl-8 text-2xl'>
                        <span style={{ backgroundColor: "#8C7FFF" }}>{emp.taskCounts.newTask}</span>
                        <span style={{ backgroundColor: "#8C7FFF" }}>New Task</span>
                    </div>
                    <div id='second' className='h-30 font-extrabold w-80 flex flex-col justify-center gap-2 pl-8 text-2xl'>
                        <span style={{ backgroundColor: "#1D981D" }}>{emp.taskCounts.completedTask}</span>
                        <span style={{ backgroundColor: "#1D981D" }}>Completed Task</span>
                    </div>
                    <div id='third' className='h-30 font-extrabold w-80 flex flex-col justify-center gap-2 pl-8 text-2xl'>
                        <span style={{ backgroundColor: "#FF887F" }}>{emp.taskCounts.acceptedTask}</span>
                        <span style={{ backgroundColor: "#FF887F" }}>Accepted Task</span>
                    </div>
                    <div id='fourth' className='h-30 font-extrabold w-80 flex flex-col justify-center gap-2 pl-8 text-2xl'>
                        <span style={{ backgroundColor: "#FF7FFD" }}>{emp.taskCounts.failedTask}</span>
                        <span style={{ backgroundColor: "#FF7FFD" }}>Failed Task</span>
                    </div>
                </>
            ))
        }
    </div>

        <div className="h-auto grid grid-cols-4 gap-5 p-5 px-9 mt-10 mb-20 justify-center">

        {userData ? userData.filter(emp => emp.firstName === name).map(emp => (

                emp.tasks.map((task , index) => (
                    <div key = {index} id = "first" className="h-auto min-w-[320px] font-extrabold flex flex-col px-4 py-5 mb-5">
                        <div id="title" className="flex justify-between w-full items-center">
                            <div id="diff" className="h-8 w-auto rounded-md font-medium leading-8 pl-2 pr-2 mb-5">
                              {task.category}
                            </div>
                            <div id="date" className="h-8 w-auto font-medium text-center leading-8 mb-5">
                                {task.date}
                            </div>
                        </div>
                        <div id="head" className="text-2xl font-bold mb-2">{task.title}</div>
                        <div id="discription" className="font-consolas text-[14px] text-gray-100">{task.discription}</div>
                        <div className="flex justify-between flex-col h-full w-full pt-3 gap-2">
                            <button onClick={mark} id="complete" className="h-8 rounded-md text-center w-full">{btn}</button>
                            <button onClick={markTwo} id="failed" className="h-8 rounded-md text-center w-full">{fBtn}</button>
                            <button onClick={markThree} id="accept" className="h-8 rounded-md text-center w-full">{aBtn}</button>
                        </div>
                    </div>
              ))
          )) : (<h1>WooHoo !! Nothing To Do !!</h1>)}

        </div>   
    </>
  )
}

export default ClientDB