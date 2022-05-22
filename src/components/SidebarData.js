import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Sheduling",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Default Hours Per Day",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Default Days per Week",
        path: "/overview/scheduling",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Holiday Dates",
        path: "/overview/scheduling",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Rates/Pricing",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Item Descriptions",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Rates",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Employees",
    path: "/products",

    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Employee Setup",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Default Hours Per Day",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Default Days per Week",
        path: "/overview/scheduling",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Holiday Dates",
        path: "/overview/scheduling",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Settings",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Bookings",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Current Bookings",
        path: "/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Completed Bookings",
        path: "/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Cancelled Bookings",
        path: "/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
