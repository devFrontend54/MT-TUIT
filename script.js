document.onload = e => {
    var links = document.querySelectorAll('.main_burger_link')
    console.log(links);

    links.forEach(link => link.onclick = e => {
        console.log('e');

    })
}
