import React from 'react';

const ListUserItem = ({active}) => {

    return (
        <tr className={active ? "active-row" : null}>
            <td>1</td>
            <td>mahdi kazemi</td>
            <td>mdka2885mdka@gmail.com</td>
            <td>PHP , react ,...</td>
            <td>5</td>
            <td>2</td>
            <td>2</td>
            <td>Admin , Manager ,Senior , ...</td>
            <td className="operation">
                <span className="row">
                    <button>Delete</button>
                    <button>Edit</button>
                </span>
                <span className="row">
                    <button>Fast Edit</button>
                    <button>Reset Password</button>
                </span>
            </td>
        </tr>
    )
}
export default ListUserItem;