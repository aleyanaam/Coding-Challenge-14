//Task 2
async function fetchTickets() {
    //Gets the products from the API
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts'; 
    const ticketContainer = document.getElementById('ticketContainer'); 
    //Displays an error message 
    const errorMessage = document.getElementById('errorMessage'); 
    try { 
        
        const response = await fetch(apiEndpoint); //Pauses the function's execution until promises are resolved
        if (!response.ok) {
            throw new Error('Error!');
        }
        const data = await response.json(); 
  
        if (data.length === 0) { //Checks if the data set is empty
            throw new Error('No Customer Support Tickets');  
        }

        displayTickets(data);
    } catch (error) { 
        errorMessage.textContent = `Error: ${error.message}`;  
}
}
// Task 3
function displayTickets(tickets) {
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.innerHTML = ''; //Clears the container
 
 
    tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.classList.add('ticket'); //Adds a ticket to the list
 
 
        ticketElement.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p>Customer Name: User ${ticket.userId}</p>
            <p>Issue Description: ${ticket.title}</p>
            <p>Details: ${ticket.body}</p>
        `;
 
 
        ticketContainer.appendChild(ticketElement);
    });
 }
 
 
 fetchTickets();
 
