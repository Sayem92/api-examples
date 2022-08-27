const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
};

const displayUsers = users => {
    const usersContainer = document.getElementById('users-container');
    for(const user of users){
        // console.log(user)       // check the type 
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User Name : ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>Email : ${user.email}</p>
        <p>User Location : City-${user.location.city},  Country-${user.location.country} </p>
        `;
        usersContainer.appendChild(userDiv);
    }
};
loadUsers()