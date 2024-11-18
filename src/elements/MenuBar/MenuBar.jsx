// Import the CSS file for styling the MenuBar component
import './MenuBar.css';

// Import SVG icons as React components
import { ReactComponent as MdOutlineTune } from '../../images/Display.svg';
import { ReactComponent as FaAngleDown } from '../../images/down.svg';

// Import the useState hook for managing component state
import { useState } from 'react';

// Options for grouping dropdown
const groupOptions = [
    { label: "Status", value: "status" }, // Group by task status
    { label: "User", value: "user" },     // Group by user
    { label: "Priority", value: "priority" }, // Group by task priority
];

// Options for ordering dropdown
const orderOptions = [
    { label: "Priority", value: "priority" }, // Order by priority
    { label: "Title", value: "title" },       // Order by title
];

// Menubar component
// The Props are
// - group (string): Initial grouping option
// - order (string): Initial ordering option
// - onGroupchange (function): Callback when grouping changes
// - onOrderChange (function): Callback when ordering changes
const Menubar = ({ group, order, onGroupchange, onOrderChange }) => {
    // State to track whether the dropdown menu is expanded
    const [expandMore, setExpandMore] = useState(false);

    // State to track the selected grouping option
    const [groupedBy, setGroupedBy] = useState(group);

    // State to track the selected ordering option
    const [orderedBy, setOrderedBy] = useState(order);

    // Handler for when the grouping option changes
    const handleGroupChange = (e) => {
        setGroupedBy(e.target.value); // Update the groupedBy state
        onGroupchange(e.target.value); // Call the parent callback with the new value
    };

    // Handler for when the ordering option changes
    const handleOrderChange = (e) => {
        setOrderedBy(e.target.value); // Update the orderedBy state
        onOrderChange(e.target.value); // Call the parent callback with the new value
    };

    return (
        <div className='menu_bar'>
            {/* Button to toggle dropdown visibility */}
            <div
                className='expand_button'
                onClick={() => { setExpandMore(prev => !prev); }}
            >
                <MdOutlineTune /> {/* Display icon */}
                <span>Display</span>
                <FaAngleDown /> {/* Dropdown arrow icon */}
            </div>

            {/* Dropdown menu for grouping and ordering options */}
            {expandMore && (
                <div className="dropdown">
                    {/* Grouping section */}
                    <div className='display'>
                        <p>Grouping</p>
                        <select
                            name="group"
                            id="groupBy"
                            defaultValue={group}
                            onChange={handleGroupChange}
                        >
                            {/* Render grouping options dynamically */}
                            {groupOptions.map((opt, i) => (
                                <option key={i} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Ordering section */}
                    <div className='display'>
                        <p>Ordering</p>
                        <select
                            name="order"
                            id="orderBy"
                            defaultValue={order}
                            onChange={handleOrderChange}
                        >
                            {/* Render ordering options dynamically */}
                            {orderOptions.map((opt, i) => (
                                <option key={i} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

// Here, export the Menubar 
export default Menubar;
