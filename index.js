function header() {
    const root =  document.getElementById('root')
    const header = document.createElement('header');
    header.innerHTML = `
    <a href="./index.html">HOME</a>
    <nav>
        <h2>Latest Games</h2>
        <ul>
            <li><a href="#">Chess</a></li>
            <li><a href="#">Tic Tac Toe</a></li>
            <li><a href="#">Snake</a></li>
            <li><a href="#">All Games</a></li>
        </ul>
    </nav>
    `;

   root.insertBefore(header, root.firstChild);
}

function footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    &copy; MINI GAMES 2024, All Rights Reserved.
    `;

    document.getElementById('root').appendChild(footer);
}

header();
footer();