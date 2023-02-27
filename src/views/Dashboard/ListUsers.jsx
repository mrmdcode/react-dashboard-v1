import React from 'react';
import ListUserItem from "../../components/dashboard/ListUserItem";

const ListUsers = () => {
    const users = [
        {
            id:1,
            FirstName : "mahdi",
            LastName : "kazemi zade",
            Email : "mdka2885mdka@gmail.com",
            Skill : "Backend Developer",
            Skills : ["PHP","React","Js","wordpress"],
            TodoCount : 5,
            DoneProjectCount : 2,
            WorkingOnCount : 5,
            Roles : ["Admin","Manager" ,"Senior"],
            RegisterAt : "1399/12/29",
            LastLogin : "1401/11/29"
        },
        {
            id:2,
            FirstName : "mamd",
            LastName : "hosseini",
            Email : "mamad.hossein@gmail.com",
            Skill : "Front Developer",
            Skills : ["React","Js","TypeScript"],
            TodoCount : 1,
            DoneProjectCount : 1,
            WorkingOnCount : 1,
            Roles : ["Programmer" , "Writer"],
            RegisterAt : "1399/12/29",
            LastLogin : "1401/11/29"
        },{
            id:1,
            FirstName : "ali",
            LastName : "sirabi",
            Email : "ali.aliee@gmail.com",
            Skill : "Python Developer",
            Skills : ["django" , "machine learninig"],
            TodoCount : 3,
            DoneProjectCount : 3,
            WorkingOnCount : 3,
            Roles : ["Programmer" ,"Writer"],
            RegisterAt : "1399/12/29",
            LastLogin : "1401/11/29"
        }
    ]


    const OperationHandler =(Chosse , id)=>{
        console.log(Chosse , id)
    }
    return (
        <section className="users-information">
            <div className="list-user">
                <table className="table-style">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Skill</th>
                        <th>Skills</th>
                        <th>Todo Count</th>
                        <th>Done Project Count</th>
                        <th>Working On</th>
                        <th>Role</th>
                        <th>Register At</th>
                        <th>Last Login At</th>
                        <th>Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user ,index)=>{
                        return(
                            <ListUserItem key={index} index={index} data={user} OperationHandler={OperationHandler}/>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default ListUsers;