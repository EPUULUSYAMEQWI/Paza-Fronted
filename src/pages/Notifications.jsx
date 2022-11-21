import React from "react";
import Header from "../components/Header";
import NotificationItem from "../components/notifications.jsx/NotificationItem";

const contents = [
    {
        type: "Post",
        title: "Shortage of Water",
        addedBy: "Jese Leos",
        date: "01/3/2023",
    },
    {
        type: "Forum",
        title: "Scarcity of Jobs",
        addedBy: "Riley Davis",
        date: "01/3/2023",
    },
    {
        type: "Forum",
        title: "Aid needers",
        addedBy: "John Depps",
        date: "01/3/2023",
    },
]


const Notifications = ()=>{
    return(
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
            <Header title="Notifications" category=""/>
            {contents.map((data, i) => (
                <NotificationItem data={data} key={i} />
            ))}
        </div>
    )
}
export default Notifications