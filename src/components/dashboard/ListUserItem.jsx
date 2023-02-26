import React from 'react';
import {AiOutlineUserDelete ,AiOutlineEdit ,AiOutlineKey} from 'react-icons/ai';


const ListUserItem = ({index ,active =false , data ,OperationHandler}) => {
    const {
        id,
        FirstName,
        LastName,
        Email,
        Skill,
        Skills,
        TodoCount,
        DoneProjectCount,
        WorkingOnCount,
        Roles,
        RegisterAt,
        LastLogin
    } = data;

    return (
        <tr className={active ? "active-row" : null}>
            <td>{index}</td>
            <td>{FirstName + LastName}</td>
            <td>{Email}</td>
            <td>{Skill}</td>
            <td>{Skills[0]} , {Skills[1]}, {Skills[2] ?`${Skills[2]} ,` : null } ...</td>
            <td>{TodoCount}</td>
            <td>{DoneProjectCount}</td>
            <td>{WorkingOnCount}</td>
            <td>{Roles[0]} ,  {Roles[1] ?`${Roles[1]} ,` : null } {Roles[2] ?`${Roles[2]} ` : null } ...</td>
            <td>{RegisterAt}</td>
            <td>{LastLogin}</td>
            <td className="operation">
                <span className="row">
                    <button onClick={()=>OperationHandler(id,"Delete")}><AiOutlineUserDelete/> Delete</button>
                    <button onClick={()=>OperationHandler(id,"Edit")}><AiOutlineEdit/> Edit</button>
                </span>
                <span className="row">
                    <button onClick={()=>OperationHandler(id,"FastEdit")}><AiOutlineEdit/> Fast Edit</button>
                    <button onClick={()=>OperationHandler(id,"ResetPassword")}><AiOutlineKey/>Reset Password</button>
                </span>
            </td>
        </tr>
    )
}
export default ListUserItem;