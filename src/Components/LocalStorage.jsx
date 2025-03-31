const employee = [
    {
        "id" : 1,
        "firstName" : "Emp001",
        "email" : "emp001@gmail.com",
        "password" : "123",
        "taskCounts" : {
            "newTask" : 0,
            "completedTask" : 0,
            "acceptedTask" : 0,
            "failedTask" : 0
        },
        "tasks": [
            {
                "category": "Development",
                "date": "28-03-2025",
                "title": "Make A Youtube Video",
                "discription": "You are given a positive integer days representing the total number of days an employee is available for work."
            }
        ]        
    },
    {
        "id" : 2,
        "firstName" : "Emp002",
        "email" : "emp002@gmail.com",
        "password" : "123",
        "taskCounts" : {
            "newTask" : 0,
            "completedTask" : 0,
            "acceptedTask" : 0,
            "failedTask" : 0
        },
        "tasks": [
            {
                "category": "Development",
                "date": "28-03-2025",
                "title": "Make A Youtube Video",
                "discription": "You are given a positive integer days representing the total number of days an employee is available for work."
            }
        ] 
    }
]

const admin = [
    {
        "id" : 2,
        "firstName" : "Anurag",
        "email" : "admin@gmail.com",
        "password" : "456"
    }
]

export const setLS = () =>{

    localStorage.setItem('employees' , JSON.stringify(employee));
    localStorage.setItem('admin' , JSON.stringify(admin));

}

export const getLS = () =>{

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees , admin}

}