// Import the CSS file for styling the ProfileIcon component
import './ProfileIcon.css';

// Import the "To-do" SVG as a React component.
import { ReactComponent as FaCircle } from '../../images/To-do.svg';

// Define the ProfileIcon component
// The Props are : 
// - intials (string): The initials to display inside the user icon
// - available (boolean): Indicates whether the user is available (true/false)
// - bgColor (string): The background color for the user icon
const ProfileIcon = ({ intials, available, bgColor }) => {
    // Log the background color to the console (for debugging purposes)
    console.log(bgColor);

    return (
        <div className='profile'>
            {/* Profile icon with dynamic background color */}
            <div className='profile_icon' style={{ backgroundColor: bgColor }}>{intials}</div>
            
            {/* Availability dot with dynamic color based on `available` prop */}
            <div className='dot' style={available ? { color: "#50B053" } : {}}>
                <FaCircle />
            </div>
        </div>
    );
}

// Export the ProfileIcon component for use in other parts of the application
export default ProfileIcon;
