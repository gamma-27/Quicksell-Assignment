import { useEffect, useState } from 'react'; 
import './App.css'; // Import the CSS file for styling the app
import Menubar from './elements/MenuBar/MenuBar'; // Import the menu bar component for grouping and sorting options
import Dashboard from './elements/Dashboard/Dashboard'; // Import the dashboard to display tickets in a Kanban style
import { status, priorities } from './helpers/info'; // Import pre-defined grouping options like status and priorities

function App() {
  // State to hold the list of tickets fetched from the API
  const [tickets, setTickets] = useState([]);
  
  // State to hold the list of users fetched from the API
  const [users, setUsers] = useState([]);
  
  // Get the last selected group and order from localStorage to persist user preferences
  const defaultGroup = localStorage.getItem('selectedGroup');
  const defaultOrder = localStorage.getItem('selectedOrder');

  // State to track the current grouping option (default is 'status')
  const [group, setGroup] = useState(defaultGroup ? defaultGroup : 'status');
  
  // State to track the current sorting option (default is 'priority')
  const [order, setOrder] = useState(defaultOrder ? defaultOrder : 'priority');

  // Function to update the grouping option when the user selects a new one
  const handleGroupChange = (groupSelected) => {
    setGroup(groupSelected); // Update the state with the selected group
    localStorage.setItem("selectedGroup", groupSelected); // Save the selection to localStorage
  }

  // Function to update the sorting option when the user selects a new one
  const handleOrderChange = (orderSelected) => {
    setOrder(orderSelected); // Update the state with the selected order
    localStorage.setItem("selectedOrder", orderSelected); // Save the selection to localStorage
  }

  // Fetch data from the API when the component first loads
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this runs only once when the app loads

  // Function to fetch tickets and users data from the API
  const fetchData = async () => {
    try {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); // Call the API
      const data = await res.json(); // Convert the response to JSON
      setTickets(data.tickets); // Save the tickets data
      setUsers(data.users); // Save the users data
    } catch (error) {
      console.log("Unable to fetch data! ", error); // Log errors if the API call fails
    }
  }

  return (
    <div className=""> {/* Main container */}
      <div className="App scroll-container"> {/* Adds scrollable content */}
        {/* Render the menu bar with grouping and sorting options */}
        <Menubar 
          group={group} 
          order={order} 
          onGroupchange={handleGroupChange} 
          onOrderChange={handleOrderChange} 
        />
        
        {/* Container for displaying the grouped tickets */}
        <div className='boards_container'>
          <div className='app_boards'>
            {/* Display tickets grouped by status */}
            {group === 'status' && status.map((opt, id) => (
              <Dashboard 
                order={order} 
                data={opt} 
                key={id} 
                tickets={tickets} 
                users={users} 
                group={group} 
              />
            ))}

            {/* Display tickets grouped by user */}
            {group === 'user' && users.map((opt) => (
              <Dashboard 
                order={order} 
                data={opt} 
                key={opt.id} 
                tickets={tickets} 
                users={users} 
                group={group} 
                userId={opt?.id} 
              />
            ))}

            {/* Display tickets grouped by priority */}
            {group === 'priority' && priorities.map((opt, id) => (
              <Dashboard 
                order={order} 
                data={opt} 
                level={id} 
                key={id} 
                tickets={tickets} 
                users={users} 
                group={group} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; // Export the main App component
