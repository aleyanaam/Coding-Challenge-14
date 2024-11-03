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
