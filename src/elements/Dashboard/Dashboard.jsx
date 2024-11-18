// Import necessary CSS file for styling
import './Dashboard.css';

// Import icons used in the component
import { ReactComponent as SlOptions } from '../../images/3 dot menu.svg';
import { ReactComponent as IoMdAdd } from '../../images/add.svg';

// Import child components
import Frame from '../Frame/Frame';
import ProfileIcon from '../ProfileIcon/ProfileIcon';

// Import helper functions and data
import { generateIntials, getRandomColor, priorities, statusIcons } from '../../helpers/info';

// Dashboard component definition
// The Props are :
// - tickets (array): List of ticket objects.
// - users (array): List of user objects.
// - group (string): Specifies grouping criteria (e.g., 'status', 'priority', or 'user').
// - level (string): Priority level (used for grouping by priority).
// - userId (string): User ID (used for grouping by user).
// - order (string): Sorting criteria (e.g., 'priority' or 'title').
// - data (object): Contains information about the current group (e.g., user data or priority data).
const Dashboard = (props) => {
    const { tickets, users, group, level, userId, order, data } = props;

    // Filter tickets based on the selected group criteria
    let filteredTickets = [];
    if (group === 'status') {
        filteredTickets = tickets.filter(ticket => ticket.status.toLowerCase() === data.title.toLowerCase());
    } else if (group === 'priority') {
        filteredTickets = tickets.filter(ticket => ticket.priority === level);
    } else {
        filteredTickets = tickets.filter(ticket => ticket.userId === userId);
    }

    // Sort tickets based on the selected order
    if (order === 'priority') {
        filteredTickets = filteredTickets.slice().sort((a, b) => b.priority - a.priority);
    } else {
        filteredTickets = filteredTickets.slice().sort((a, b) => a.title.localeCompare(b.title));
    }

    // Render grouped by user
    if (group === 'user') {
        return (
            <div className='dashboard'>
                <div className='dashboard_top'>
                    <div className="dashboard_top_name">
                        <span>
                            <ProfileIcon
                                intials={generateIntials(data?.name)}
                                available={data?.available}
                                bgColor={getRandomColor()}
                            />
                        </span>
                        <p>{data?.name}</p>
                        <span>{filteredTickets.length}</span>
                    </div>
                    <div className="dashboard_top_options">
                        <IoMdAdd />
                        <SlOptions />
                    </div>
                </div>
                <div className="dashboard_container">
                    {filteredTickets.map((ticket) => (
                        <Frame
                            ticket={ticket}
                            key={ticket.id}
                            icon={priorities[ticket?.priority].icon}
                            group={group}
                            statusIcon={statusIcons[ticket?.status.toLowerCase()].icon}
                            statusColor={statusIcons[ticket?.status.toLowerCase()].color}
                            bgColor={getRandomColor()}
                        />
                    ))}
                </div>
            </div>
        );
    }

    // Render grouped by priority
    if (group === 'priority') {
        return (
            <div className='dashboard'>
                <div className='dashboard_top'>
                    <div className="dashboard_top_name">
                        <span style={{ color: data.color }}>{data.icon}</span>
                        <p>{data.title}</p>
                        <span>{filteredTickets.length}</span>
                    </div>
                    <div className="dashboard_top_options">
                        <IoMdAdd />
                        <SlOptions />
                    </div>
                </div>
                <div className="dashboard_container">
                    {filteredTickets.map((ticket) => {
                        const user = users?.find(user => user.id === ticket.userId);
                        return (
                            <Frame
                                ticket={ticket}
                                key={ticket.id}
                                user={user}
                                group={group}
                                statusIcon={statusIcons[ticket?.status.toLowerCase()].icon}
                                statusColor={statusIcons[ticket?.status.toLowerCase()].color}
                                bgColor={getRandomColor()}
                                icon=""
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

    // Render grouped by other criteria (like status)
    return (
        <div className='dashboard'>
            <div className='dashboard_top'>
                <div className="dashboard_top_name">
                    <span style={{ color: data.color }}>{data.icon}</span>
                    <p>{data.title}</p>
                    <span>{filteredTickets.length}</span>
                </div>
                <div className="dashboard_top_options">
                    <IoMdAdd />
                    <SlOptions />
                </div>
            </div>
            <div className="dashboard_container">
                {filteredTickets.map((ticket) => {
                    const user = users?.find(user => user.id === ticket.userId);
                    return (
                        <Frame
                            ticket={ticket}
                            key={ticket.id}
                            statusIcon=""
                            icon={priorities[ticket?.priority].icon}
                            user={user}
                            group={group}
                            bgColor={getRandomColor()}
                            statusColor=""
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Dashboard;
