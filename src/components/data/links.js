import { FiUser  } from "react-icons/fi";
import { MdForum, MdOutlineDashboardCustomize } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { FaPoll } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import React from 'react'
import { RiCommunityLine} from "react-icons/ri"
import { GrNotification} from "react-icons/gr"

export const orderLinks = [
    {
        role: 'admin', 
        name: 'Dashboard',
        url: 'dashboard',
        icon: <MdOutlineDashboardCustomize />,
        },
        {
            role: 'user',
            name: 'Polls',
            url: 'poll',
            icon: <FiUser />
        }, 
        {
            role: 'user',
            name: 'Forums',
            url: 'forums',
            icon: <MdForum />,
          },
          {
            role: 'admin',
            name: 'Create Forum',
            url: 'createforums',
            icon: <RiChatNewFill />,
          },
          {
            role: 'admin',
            name: 'Create Poll', 
            url: 'createpoll',
            icon: <FaPoll />
        }, 
        {
            role: 'admin',
            name: 'Feedback', 
            url: 'feedback',
            icon: <VscFeedback />
        }, 
        {
            role:'user',
            name: 'Notifications',
            url: 'notifications',
            icon: <GrNotification/>
        },
        // {
        //     role:'user',
        //     name: 'Community',
        //     url: 'community',
        //     icon: <RiCommunityLine/>
        // },
        {
            role:'admin',
            name: 'Comment',
            url: 'comment',
            icon: <RiCommunityLine/>
        },

]

