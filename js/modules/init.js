import { buildGrid } from '../script.js'

// Within the init.js file, use async / await to load the JSON data 
// and return it back into the buildGrid() function.

// Fetching the data from the module will return a Promise object. 
// This should tell you that you’ll need to either use another 
// async / await within the buildGrid() function or you’ll need 
// to use .then() to process the return JSON object.
// You will no longer be using an array. It will now be an object. 
// So your iterative code within the buildGrid() function will be 
// a bit different. 
// Make sure to remove all references to arrEmployees as this array
// will no longer be valid.

export async function init() {
    try {
        const response = await fetch('../data/employees.json');
        const jsonEmployees = await response.json();
        buildGrid(jsonEmployees.employees);
    } catch (error) {
        console.error(error);
    }
}
