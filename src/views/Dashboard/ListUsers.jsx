import React from 'react';
import ListUserItem from "../../components/dashboard/ListUserItem";

const ListUsers = () => {


    return (
        <div className="list-user">
            <section className="list row">
                <table className="table-style">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Skills</th>
                            <th>Todo Count</th>
                            <th>Done Project Count</th>
                            <th>Working On</th>
                            <th>Role</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ListUserItem active={true}/>
                        <ListUserItem/>
                        <ListUserItem/>
                        <ListUserItem/>
                        <ListUserItem/>
                    </tbody>
                </table>
            </section>
        </div>
    )
}
export default ListUsers;