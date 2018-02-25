let log = console.log   

let loginBtn = document.getElementById('login')

loginBtn.addEventListener('click', () => {
  let email = document.getElementById('email').value 
  let password = document.getElementById('password').value
  fetch('/api/v1/login', {
    method: 'POST',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email,
      password: password 
    })
  })
    .then(res => res.json())
    .then(json => window.location.reload())
    .catch(err => log('Error ', err))
})