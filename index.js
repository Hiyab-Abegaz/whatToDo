
// calling the button and it's h1's tag
const idea = document.getElementById('idea')
const button = document.querySelector('.btn')

// gets the Idea from the api
const getIdea = () => {
    // connecting the bored api url
    const tellIdeaUrl =  'http://www.boredapi.com/api/activity/';
    axios.get(tellIdeaUrl)
    .then(response => {
        // going into the file to get the data and then the activity
        const data = response.data.activity;
        // printing the data to the console
        idea.innerText = data;
    })
    //this is the catch for the error
    .catch(error => console.error(error));
}


// connecting the url with the button
button.addEventListener('click', function(event){
    //putting the other function into this one
   
    getIdea()
})




