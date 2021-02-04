
function handleSearch() {
    const searchInput = document.getElementById("searchInput").value;
    document.getElementById('box').innerHTML = ' ';
    fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + searchInput, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "f4f0a1e37fmsh26955d87fe72dd1p1f4b75jsnd3dbfff51dd6",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.titles);
            const box = document.getElementById('box');
            for (let i = 0; i < data.titles.length; i++) {
                const element = data.titles[i];
                console.log(element);
                const div = document.createElement('div');
                const img = document.createElement('img');
                const title = document.createElement('h1');
                div.className = 'col-md-6 col-sm-12 col-xs-12 box d-flex justify-content-evenly';
                title.innerHTML = element.title;
                img.src = element.image;
                div.appendChild(img);
                div.appendChild(title);
                box.appendChild(div);
            }
        })
}