
// -- Question 2 --

async function getGames() {
    try {
        const response = await fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating');
        const jResults = await response.json();
        const jsonResults = jResults.results;
    
        for (let i = 0; i < jsonResults.length; i++) {

            document.querySelector(
                '.loadingDiv'
            ).innerHTML = `<img src="https://i.pinimg.com/originals/a2/de/bf/a2debfb85547f48c3a699423ba75f321.gif" />`;
    
            setTimeout(function () {
                document.querySelector('.loadingDiv').innerHTML = ``;
            }, 3000);

            if (i === 8) {
                break;
            }
            document.querySelector('main').innerHTML += `
            <div class="cards">
                <h2>${jsonResults[i].name}</h2>
                <p>${jsonResults[i].rating}</p>
                <p>${jsonResults[i].tags.length}</p>
            </div>
            `;
        }
    } catch (error) {
        document.querySelector('.alert').innerHTML += thisIsAnAlert(
            'An error has occured',
            'danger'
        );
        console.log(error);
    } finally {
        setTimeout( function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};

getGames();