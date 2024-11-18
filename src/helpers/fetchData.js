export const fetchTicketsAndUsers = async () => {
    try {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
      return {
        tickets: data.tickets,
        users: data.users
      };
    } catch (error) {
      console.log("Unable to fetch data! ", error);
      return { tickets: [], users: [] }; // Return empty arrays in case of error
    }
  };
  