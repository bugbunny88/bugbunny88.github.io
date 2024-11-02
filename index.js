const greeting = document.getElementById('greeting');
greeting.style.textAlign = 'center';
greeting.style.marginTop = '50px';
const username = window.prompt("What's your name?", "Foo");
greeting.innerHTML = "Welcome to my website, " + username + "!";
greeting.style.fontSize = '40px';
greeting.style.fontWeight = 'bold';
greeting.style.color = "purple";
