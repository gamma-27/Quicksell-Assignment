// Import SVG components for icons used in the app
import { ReactComponent as ThreeDotMenu } from "../images/3 dot menu.svg";
import { ReactComponent as BsFillInfoSquareFill } from "../images/SVG - Urgent Priority colour.svg";
import { ReactComponent as GiNetworkBarsLow } from "../images/Img - Low Priority.svg";
import { ReactComponent as GiNetworkBarsMedium } from "../images/Img - Medium Priority.svg";
import { ReactComponent as GiNetworkBarsHigh } from "../images/Img - High Priority.svg";
import { ReactComponent as TbCircleDotted } from "../images/Backlog.svg";
import { ReactComponent as RxHalf2 } from "../images/in-progress.svg";
import { ReactComponent as FaCheckCircle } from "../images/Done.svg";
import { ReactComponent as FaCircleXmark } from "../images/Cancelled.svg";
import { ReactComponent as FaRegCircle } from "../images/To-do.svg";

// Array of background colors for random color generation
const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

// Priority levels and their associated attributes
export const priorities = [
    { title: "no priority", color: "gray", icon: <ThreeDotMenu /> }, // Default no priority
    { title: "low", color: "lightgray", icon: <GiNetworkBarsLow /> }, // Low priority
    { title: "medium", color: "gray", icon: <GiNetworkBarsMedium /> }, // Medium priority
    { title: "high", color: "black", icon: <GiNetworkBarsHigh /> }, // High priority
    { title: "urgent", color: "orange", icon: <BsFillInfoSquareFill /> } // Urgent priority
];

// Ticket statuses and their associated attributes
export const status = [
    { title: "backlog", color: "black", icon: <TbCircleDotted /> }, // Backlog status
    { title: "todo", color: "lightgrey", icon: <FaRegCircle /> }, // To-do status
    { title: "in progress", color: "#EBCB62", icon: <RxHalf2 /> }, // In-progress status
    { title: "done", color: "#606ACB", icon: <FaCheckCircle /> }, // Completed status
    { title: "cancelled", color: "gray", icon: <FaCircleXmark /> }, // Cancelled status
];

// Icon and color mapping for each status
export const statusIcons = {
    backlog: {
        color: "black",
        icon: <TbCircleDotted />,
    },
    todo: {
        color: "lightgrey",
        icon: <FaRegCircle />,
    },
    "in progress": {
        color: "#EBCB62",
        icon: <RxHalf2 />,
    },
    done: {
        color: "#606ACB",
        icon: <FaCheckCircle />,
    },
    cancelled: {
        color: "gray",
        icon: <FaCircleXmark />,
    },
};

// Function to generate initials from a given name
export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join(''); // Extract first letter of each word and join
};

// Function to randomly pick a background color
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length); // Generate a random index
    return bgColors[randomIndex]; // Return the color at the random index
};
