const input = document.querySelector('#user');
const button = document.querySelector('#button');

const image = document.querySelector('.picture');
const name = document.querySelector('.name');
const username = document.querySelector('.login');
const followers = document.querySelector('.followers');
const repos = document.querySelector('.public_repos');
const created = document.querySelector('.created');

const fetchData = async (user) => {

    const api_call = await fetch(`https://api.github.com/users/${user}`);

    const data = await api_call.json();

    return data

};

const showData = () => {

    fetchData(input.value).then(res => {

        if (image.src) {
            image.src = res.avatar_url;
        } else {
            image.setAttribute('display', 'none');
        }
        name.innerHTML = `Name: ${res.name}`;
        username.innerHTML = `Username: ${res.login}`;
        followers.innerHTML = `Followers: ${res.followers}`;
        repos.innerHTML = `Public repos: ${res.public_repos}`;
        created.innerHTML = `Created at: ${res.created_at.slice(0,10)}`;

    });

};

button.addEventListener('click', () => {

    showData();

    input.value = "";

});