import React, { useEffect, useState } from "react";

const ArticleCard = ({
    users,
    allUsers,
    setDataRange,
    totalUsers,
    searchQuery,
    loading,
}) => {

    const firstUserIndex = allUsers.findIndex(
        (user) => user._id === users[0]._id
    );
    const lastUserIndex = allUsers.findIndex(
        (user) => user._id === users[users.length - 1]._id
    );

    useEffect(() => {
        setDataRange(`
        ${firstUserIndex + 1} to ${lastUserIndex + 1} 
         of ${totalUsers} Users`);
    }, [totalUsers, firstUserIndex, lastUserIndex]);


    let filteredUsers;

    if (searchQuery !== "") {
        filteredUsers = allUsers.filter((user) => {
            return (
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.age
                    .toString()
                    .toLowerCase()
                    .includes(searchQuery.toString().toLowerCase()) ||
                user.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.company.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
    }

    let usersList;

    if (!filteredUsers) {
        usersList = users.map((user) => {
            return (
                <tr className="text-center hover" key={user._id}>
                    <td>{allUsers.findIndex((x) => x._id === user._id) + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender}</td>
                    <td>{user.company}</td>
                    <td>{user.slary}</td>
                </tr>
            );
        });
    } else {
        usersList = filteredUsers.map((user) => {
            return (
                <tr className="text-center hover" key={user._id}>
                    <td>{allUsers.findIndex((x) => x._id === user._id) + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender}</td>
                    <td>{user.company}</td>
                    <td>{user.slary}</td>
                </tr>
            );
        });
    }

    return (
        <div className="overflow-x-auto container mx-auto">
            <table className="table w-full">
                <thead>
                    <tr className="text-center hover">
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Company</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>{usersList}</tbody>
            </table>

        </div>
    );
};

export default ArticleCard;