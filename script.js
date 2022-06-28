//Event listeners
//Populate cards
this.addEventListener("load",PopulateCards);

//Load basket total
window.addEventListener("load",CountNumberInCart);



//Array
var Movies =[
{
    id: 1,
    title: "Spiderman: No way home",
    director:"Jon Watts",
    runtime:"2H28",
    release_year: 2021,
    description:"Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.",
    poster_url: "Images/Spiderman.jpg",
    cinema_number: 1,
    ticket_price: 180.00,
    tickets_in_cart: localStorage.getItem("1")
},
{
    id: 2,
    title: "Top Gun: Maverick",
    director:"Joseph Kosinski",
    runtime: "2H11",
    release_year: 2022,
    description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
    poster_url: "Images/Top Gun Maverick.jpg",
    cinema_number: 2,
    ticket_price: 225.00,
    tickets_in_cart: localStorage.getItem("2")
},
{
    id: 3,
    title: "Doctor Strange in the Multiverse of Madness",
    director:"Sam Raimi",
    runtime:"2H6",
    release_year: 2021,
    description:"Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
    poster_url: "Images/DRSTRANGE.jpg",
    cinema_number: 3,
    ticket_price: 155.00,
    tickets_in_cart: localStorage.getItem("3")
},
{
    id: 4,
    title: "Uncharted",
    director:"Ruben Fleischer",
    runtime:"1H56",
    release_year:2022,
    description:"Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor 'Sully' Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.",
    poster_url: "Images/Uncharted.jpg",
    cinema_number: 4,
    ticket_price: 215.00,
    tickets_in_cart: localStorage.getItem("4")
}];

//Functions
//Populate each card on load
function PopulateCards()
{
        for(let x = 0; x<=4; x++)
        {
            var CardID = document.getElementById(x);

            for(let i = 0; i <=4; i++)
            {
                if(CardID == Movies[i.id])
                {
                    if(i == 0)
                    {
                        document.getElementById("MovieOneTitle").innerHTML = Movies[i].title;
                        document.getElementById("MovieOneImage").innerHTML = '<img class="card-img-top" src="' + Movies[i].poster_url + '">';
                        document.getElementById("MovieOneDescription").innerHTML = Movies[i].description;
                        document.getElementById("MovieOnePrice").innerHTML = "R" + Movies[i].ticket_price;
                        
                    }
                    
                        else if (i == 1)
                        {
                            document.getElementById("MovieTwoTitle").innerHTML = Movies[i].title;
                            document.getElementById("MovieTwoImage").innerHTML = '<img class="card-img-top" src="' + Movies[i].poster_url + '">';
                            document.getElementById("MovieTwoDescription").innerHTML = Movies[i].description;
                        document.getElementById("MovieTwoPrice").innerHTML = "R" + Movies[i].ticket_price;
                            
                        }

                        else if(i == 2)
                        {
                            document.getElementById("MovieThreeTitle").innerHTML = Movies[i].title;
                            document.getElementById("MovieThreeImage").innerHTML = '<img class="card-img-top" src="' + Movies[i].poster_url + '">';
                            document.getElementById("MovieThreeDescription").innerHTML = Movies[i].description;
                        document.getElementById("MovieThreePrice").innerHTML = "R" + Movies[i].ticket_price;
                            
                        }

                        else if (i == 3)
                        {
                            document.getElementById("MovieFourTitle").innerHTML = Movies[i].title;
                            document.getElementById("MovieFourImage").innerHTML = '<img class="card-img-top" src="' + Movies[i].poster_url + '">';
                            document.getElementById("MovieFourDescription").innerHTML = Movies[i].description;
                            document.getElementById("MovieFourPrice").innerHTML = "R" + Movies[i].ticket_price;  
                        }
                }
            }
        }
}

//Event listeners to populate Modal
document.getElementById("btnMovieOne").addEventListener("click",function(){
    document.getElementById("FilmTitle").innerHTML = Movies[0].title; 
    document.getElementById("FilmCharacteristics").innerHTML = 
    "<b>Title:</b> " + Movies[0].title + "<br>" +
    "<b>Director/s:</b> " + Movies[0].director + "<br>" +
    "<b>Release Year:</b> " + Movies[0].release_year + "<br>" +
    "<b>Runtime:</b> " + Movies[0].runtime;
});

document.getElementById("btnMovieTwo").addEventListener("click",function(){
    document.getElementById("FilmTitle").innerHTML = Movies[1].title;
    document.getElementById("FilmCharacteristics").innerHTML = 
    "<b>Title:</b> " + Movies[1].title + "<br>" +
    "<b>Director/s:</b> " + Movies[1].director + "<br>" +
    "<b>Release Year:</b> " + Movies[1].release_year + "<br>" +
    "<b>Runtime:</b> " + Movies[1].runtime;
});

document.getElementById("btnMovieThree").addEventListener("click",function(){
    document.getElementById("FilmTitle").innerHTML = Movies[2].title;
    document.getElementById("FilmCharacteristics").innerHTML = 
    "<b>Title:</b> " + Movies[2].title + "<br>" +
    "<b>Director/s:</b> " + Movies[2].director + "<br>" +
    "<b>Release Year:</b> " + Movies[2].release_year + "<br>" +
    "<b>Runtime:</b> " + Movies[2].runtime;
});
document.getElementById("btnMovieFour").addEventListener("click",function(){
    document.getElementById("FilmTitle").innerHTML = Movies[3].title;
    document.getElementById("FilmCharacteristics").innerHTML = 
    "<b>Title:</b> " + Movies[3].title + "<br>" +
    "<b>Director/s:</b> " + Movies[3].director + "<br>" +
    "<b>Release Year:</b> " + Movies[3].release_year + "<br>" +
    "<b>Runtime:</b> " + Movies[3].runtime; 
});

//Book movie button functionality
document.getElementById("BookMovieOne").addEventListener("click",function(){
    localStorage.clickcount = 0;
    if(typeof(Storage) !== "undefined")
    {
        if (localStorage.clickcount)
        {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        }

        else
        {
            localStorage.clickcount = 1;
        }
    } 
    
    if (localStorage.getItem("1") >= 1)
    {
        let clickcount;
        clickcount = Number(localStorage.getItem("1")) + 1;
        //Save clickcount for this movie
        localStorage.setItem("1",clickcount);
    }

    else
    {
        localStorage.setItem("1",localStorage.clickcount);
    }

    //Set tickets in cart to clickcount with each button press
    Movies[0].tickets_in_cart = localStorage.getItem("1");

    //Save movie object
    localStorage.setItem("moviesInCart", JSON.stringify(Movies));

    //Update number in cart
    NumberInCart();
})

document.getElementById("BookMovieTwo").addEventListener("click",function(){
    localStorage.clickcount = 0;
    if(typeof(Storage) !== "undefined")
    {
        if (localStorage.clickcount)
        {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        }

        else
        {
            localStorage.clickcount = 1;
        }
    } 
    
    if (localStorage.getItem("2") >= 1)
    {
        let clickcount;
        clickcount = Number(localStorage.getItem("2")) + 1;
        //Save clickcount for this movie
        localStorage.setItem("2",clickcount);
    }

    else
    {
        localStorage.setItem("2",localStorage.clickcount);
    }

    //Set tickets in cart to clickcount with each button press
    Movies[1].tickets_in_cart = localStorage.getItem("2");

    //Save movie object
    localStorage.setItem("moviesInCart", JSON.stringify(Movies));

    //Update number in cart
    NumberInCart();
})

document.getElementById("BookMovieThree").addEventListener("click",function(){
    localStorage.clickcount = 0;
    if(typeof(Storage) !== "undefined")
    {
        if (localStorage.clickcount)
        {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        }

        else
        {
            localStorage.clickcount = 1;
        }
    } 
    
    if (localStorage.getItem("3") >= 1)
    {
        let clickcount;
        clickcount = Number(localStorage.getItem("3")) + 1;
        //Save clickcount for this movie
        localStorage.setItem("3",clickcount);
    }

    else
    {
        localStorage.setItem("3",localStorage.clickcount);
    }

    //Set tickets in cart to clickcount with each button press
    Movies[2].tickets_in_cart = localStorage.getItem("3");

    //Save movie object
    localStorage.setItem("moviesInCart", JSON.stringify(Movies));

    //Update number in cart
    NumberInCart();
})

document.getElementById("BookMovieFour").addEventListener("click",function(){
    localStorage.clickcount = 0;
    if(typeof(Storage) !== "undefined")
    {
        if (localStorage.clickcount)
        {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        }

        else
        {
            localStorage.clickcount = 1;
        }
    } 
    
    if (localStorage.getItem("4") >= 1)
    {
        let clickcount;
        clickcount = Number(localStorage.getItem("4")) + 1;
        //Save clickcount for this movie
        localStorage.setItem("4",clickcount);
    }

    else
    {
        localStorage.setItem("4",localStorage.clickcount);
    }

    //Set tickets in cart to clickcount with each button press
    Movies[3].tickets_in_cart = localStorage.getItem("4");

    //Save movie object
    localStorage.setItem("moviesInCart", JSON.stringify(Movies));

    //Update number in cart
    NumberInCart();
})

function CountNumberInCart()
{
    if (localStorage.getItem("numberInCart") >= 1)
    {
       NumberInCart();
    }

    else
    {
        let TicketQuantity = 0;
        localStorage.setItem("numberInCart", TicketQuantity);
        document.getElementById("Basket").innerHTML = TicketQuantity;
    }
}

//Functions to count number of tickets total in cart
function NumberInCart()
{
    let TicketQuantity = 0;
    TicketQuantity = Number(Movies[0].tickets_in_cart) + Number(Movies[1].tickets_in_cart) + Number(Movies[2].tickets_in_cart) + Number(Movies[3].tickets_in_cart) ;
    localStorage.setItem("numberInCart", TicketQuantity)
    document.getElementById("Basket").innerHTML = localStorage.getItem("numberInCart");
}

