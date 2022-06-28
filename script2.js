//Add Event Listeners
window.addEventListener("load",CreateTable);
window.addEventListener("load",CountNumberInCart);


//Get data saved for movie objects
const BuiltString = localStorage.getItem("moviesInCart");
const MovieArray = JSON.parse(BuiltString); 

//Function to count number of tickets total in cart
function NumberInCart()
{
    let TicketQuantity = 0;
    TicketQuantity = Number(MovieArray[0].tickets_in_cart) + Number(MovieArray[1].tickets_in_cart) + Number(MovieArray[2].tickets_in_cart) + Number(MovieArray[3].tickets_in_cart) ;
    localStorage.setItem("numberInCart", TicketQuantity)
    document.getElementById("Basket").innerHTML = TicketQuantity;
}

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

//Create table in cart page
//Function that creates table
function CreateTable()
{
    //Table starter
    var tableBody =  "<thead><tr><th>Movie</th><th>Unit Price</th><th>Quantity</th><th>Total</th></tr></thead><tbody>";

    if(localStorage.getItem("numberInCart") > 0)
    {
        let Total = 0

        for(let i = 0; i < MovieArray.length; i++)
        
        {
            if(MovieArray[i].tickets_in_cart > 0)
            {
            //Create table
            tableBody += "<tr><td>" + "<i class='fa-solid fa-trash-can fa-lg' id='TrashButton" + MovieArray[i].id + "'></i>" + " " +  MovieArray[i].title + "</td>" + 
            "<td>" + MovieArray[i].ticket_price + "</td>" + 
            "<td>" + "<i class='fa-solid fa-arrow-left fa-lg' id='RemoveMTicket" + MovieArray[i].id + "'" + "></i>" + MovieArray[i].tickets_in_cart + "<i class='fa-solid fa-arrow-right fa-lg' id='AddMTicket" + MovieArray[i].id + "'" + "></i>" + "</td>" +
            "<td>" + "R" + (MovieArray[i].ticket_price * MovieArray[i].tickets_in_cart).toFixed(2) + "</td>" + "</tr>";
            }
            //Save Total of Ticket prices   
            Total += Number((MovieArray[i].ticket_price * MovieArray[i].tickets_in_cart));
        }

        localStorage.setItem("totalCost",Total.toFixed(2));
        tableBody += "</tbody><tfoot>";

        //Add total cost
        tableBody += "<tr><td></td><td></td><td>" + "<b>Total</b>:" + "</td>" + "<td>" + "<b>" + "R" + localStorage.getItem("totalCost") + "</b>" + "</tr></tfoot>"
        let Body = document.getElementById("body");
        Body.innerHTML = tableBody; 
    }
    else
    {
        let Body = document.getElementById("body");
        Body.innerHTML = tableBody + "<tr id='NoItemError'><td>There are no items in your cart</td></tr>";
    }
}

//Add and remove ticket buttons
//Add
$("#body").on("click", "#AddMTicket1", function(Event)
{
    var RowIndex = 0;
    RowIndex = $(this).closest("tr").index();
    AddTickets(0);
});

$("#body").on("click", "#AddMTicket2", function(Event)
{
    var RowIndex = 0;
    RowIndex = $(this).closest("tr").index();
    AddTickets(1);
});

$("#body").on("click", "#AddMTicket3", function(Event)
{
    var RowIndex = 0;
    RowIndex = $(this).closest("tr").index();
    AddTickets(2);
});

$("#body").on("click", "#AddMTicket4", function(Event)
{
    var RowIndex = 0;
    RowIndex = $(this).closest("tr").index();
    AddTickets(3);
});



//Remove
$("#body").on("click", "#RemoveMTicket1", function(Event)
{
    var RowIndex = 0;
    RowIndex = $(this).closest("tr").index();
    RemoveTickets(0);
});

$("#body").on("click", "#RemoveMTicket2", function(Event)
{
    var RowIndex = 0;
    RowIndex = $(this).closest("tr").index();
    RemoveTickets(1);
});

$("#body").on("click", "#RemoveMTicket3", function(Event)
{
    var RowIndex = 0;
    RowIndex = $(this).closest("tr").index();
    RemoveTickets(2);
});

$("#body").on("click", "#RemoveMTicket4", function(Event)
{
    var RowIndex = 0;
    RowIndex = $(this).closest("tr").index();
    RemoveTickets(3);
});

//Function to add tickets
function AddTickets(index)
{
    let Ticket = Number(MovieArray[index].tickets_in_cart);
    Ticket = Ticket + 1;
    MovieArray[index].tickets_in_cart = Ticket;
    localStorage.setItem("moviesInCart",JSON.stringify(MovieArray));
    

    if(index == 0)
    {
        localStorage.setItem("1", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    if(index == 1)
    {
        localStorage.setItem("2", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    if(index == 2)
    {
        localStorage.setItem("3", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    if(index == 3)
    {
        localStorage.setItem("4", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    
}

//function to remove tickets
function RemoveTickets(index)
{
    let Ticket = Number(MovieArray[index].tickets_in_cart);
    Ticket = Ticket - 1;
    MovieArray[index].tickets_in_cart = Ticket;
    localStorage.setItem("moviesInCart",JSON.stringify(MovieArray));
    CreateTable();
    CountNumberInCart();

    if(index == 0)
    {
        localStorage.setItem("1", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    else if(index == 1)
    {
        localStorage.setItem("2", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    else if(index == 2)
    {
        localStorage.setItem("3", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    else
    {
        localStorage.setItem("4", Ticket);
        CreateTable();
        CountNumberInCart();
    }
    
}

//Event listeners to delete object in cart
$("#body").on("click", "#TrashButton1", function(Event)
{
    var RowIndex = 0;
    $(this).closest("tr").remove();
    DeleteMovie(0);
});
//Delete object in cart
$("#body").on("click", "#TrashButton2", function(Event)
{
    var RowIndex = 0;
    $(this).closest("tr").remove();
    DeleteMovie(1);
});
//Delete object in cart
$("#body").on("click", "#TrashButton3", function(Event)
{
    var RowIndex = 0;
    $(this).closest("tr").remove();
    DeleteMovie(2);
});
//Delete object in cart
$("#body").on("click", "#TrashButton4", function(Event)
{
    var RowIndex = 0;
    $(this).closest("tr").remove();
    DeleteMovie(3);
});

//function to Delete movie
function DeleteMovie(index)
{
    let Ticket = Number(MovieArray[index].tickets_in_cart);
    Ticket = 0;
    MovieArray[index].tickets_in_cart = Ticket;
    localStorage.setItem("moviesInCart",JSON.stringify(MovieArray));
    CreateTable();
    CountNumberInCart();

    if(index == 0)
    {
        localStorage.setItem("1", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    else if(index == 1)
    {
        localStorage.setItem("2", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    else if(index == 2)
    {
        localStorage.setItem("3", Ticket);
        CreateTable();
        CountNumberInCart();
    }

    else
    {
        localStorage.setItem("4", Ticket);
        CreateTable();
        CountNumberInCart();
    } 
}