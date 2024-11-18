// Import the CSS file for styling the Frame component
import './Frame.css';

// Import the FaCircle icon as a React component
import { ReactComponent as FaCircle } from '../../images/To-do.svg';

// Import the ProfileIcon component
import ProfileIcon from '../ProfileIcon/ProfileIcon';

// Frame component definition
// Props:
// - ticket (object): Contains details of the ticket (e.g., ID, title, tags).
// - user (object): Details about the user (e.g., name, availability).
// - icon (React element): Optional icon to display in the footer.
// - statusIcon (React element): Icon indicating the ticket's status.
// - statusColor (string): Color associated with the ticket's status.
// - bgColor (string): Background color for the user's profile icon.
const Frame = ({ ticket, user, icon, statusIcon, statusColor, bgColor }) => {
    // Generate initials from the user's name (e.g., "John Doe" -> "JD")
    const userIntials = user?.name.split(' ').map(word => word.charAt(0)).join('');

    return (
        <div className='frame'>
            {/* Header section of the frame */}
            <div className='frame_header'>
                {/* Display the ticket ID */}
                <p className='frame_id'>{ticket?.id}</p>

                {/* If user data exists, display the ProfileIcon component */}
                {user && (
                    <ProfileIcon
                        intials={userIntials}
                        available={user?.available}
                        bgColor={bgColor}
                    />
                )}
            </div>

            {/* Main content section of the frame */}
            <div className='frame_info'>
                {/* Display the status icon with its associated color */}
                <span style={{ color: statusColor }}>{statusIcon}</span>
                
                {/* Display the ticket title */}
                <p>{ticket?.title}</p>
            </div>

            {/* Footer section of the frame */}
            <div className='frame_footer'>
                {/* If an icon is passed, display it */}
                {icon && (
                    <div>
                        {icon}
                    </div>
                )}

                {/* Display the ticket's tags */}
                <div className="frame_tag">
                    <FaCircle /> {/* Tag icon */}
                    {ticket?.tag.map((tg, id) => (
                        // Map through the tags array and display each tag
                        <p key={id}>{tg}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Export the Frame component for use in other parts of the application
export default Frame;
