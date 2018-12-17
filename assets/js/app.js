const input = document.querySelector('#user');
const button = document.querySelector('#button');

const image = document.querySelector('.picture');
const name = document.querySelector('.name');
const username = document.querySelector('.login');
const followers = document.querySelector('.followers');
const repos = document.querySelector('.public_repos');
const created = document.querySelector('.created');

const error = document.querySelector('.error');


const fetchData = async (user) => {

    const api_call = await fetch(`https://api.github.com/users/${user}`);

    const data = await api_call.json();

    return data

    
};

const showData = () => {

    fetchData(input.value).then(res => {

        image.src = res.avatar_url;
        image.style.display = 'block';

        name.innerHTML = `Name: ${res.name}`;
        username.innerHTML = `Username: ${res.login}`;
        followers.innerHTML = `Followers: ${res.followers}`;
        repos.innerHTML = `Public repos: ${res.public_repos}`;
        created.innerHTML = `Created at: ${res.created_at.slice(0,10)}`;

    })

};

image.style.display = 'none';
button.addEventListener('click', () => showData());