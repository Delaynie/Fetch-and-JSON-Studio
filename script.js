// TODO: first, add window load
window.addEventListener("load", function(){
    // TODO: next make a fetch
        let json = [];
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
            response.json().then(function(json) {
                const container = document.getElementById("container");
                    let index = 0;
                    container.addEventListener("click", function(){
                    container.innerHTML = `
                        <div>
                            <h3>Planet ${json[index].name}</h3>
                            <img src=${json[index].image} height=250></img>
                        </div>
                    `;
            index = (index + 1) % json.length;
        });
    });
});
});