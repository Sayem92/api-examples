const loadUserFetch = () =>{
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
    .catch(error => console.log(error));  // url a kunu pb ole bolbe
};


// uporer tar bi kolpo----------------
const loadUserAsync = async () =>{
    const url = 'https://randomuser.me/api/?gender=female';
    // const res = await fetch(url)
    // const data = await res.json()
    // displayUser(data.results[0])

    // bi kolpo 

    try {
        const res = await fetch(url)
        const data = await res.json()
        displayUser(data.results[0])
    } catch (error) {
        console.log(error);
    }   // error dile pb nai--------------------
};

const displayUser = user =>{
    console.log(user)
};