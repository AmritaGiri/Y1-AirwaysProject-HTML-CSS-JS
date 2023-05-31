/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global ticket */

let tickets = [{id: 0, name: "Mary Rogers", location: "Sydney", date: "10/11/2020", duration: "14 days"},
    {id: 1, name: "Sean Rogers", location: "Sydney", date: "10/11/2020", duration: "14 days"},
    {id: 2, name: "Patrick Rogers", location: "Melbourne", date: "20/06/2020", duration: "7 days"},
    {id: 3, name: "Isabelle Rogers", location: "Brisbane", date: "07/05/2020", duration: "3 days"}];

let uniqueId = tickets.length


            function displayTickets(selectedTickets)
            {
                let htmlString = `<table id=ticketsTable>
                     <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Location</th>
                       <th class=alignRight>Date</th>
                       <th class=alignRight>Year</th>
                     </tr>`
                selectedTickets.map(ticket =>
                {
                    htmlString += `<tr>
                         <td>${ticket.id}</td>
                         <td>${ticket.name}</td>
                         <td>${ticket.location}</td>
                         <td class=alignRight>${ticket.date}</td>
                         <td class=alignRight>${ticket.duration}</td>
                       </tr>`
                })

                document.getElementById("yourTicketTable").innerHTML = htmlString
            }


            function searchTicketsByName(name)
            {
                const selectedTickets = tickets.filter(ticket => ticket.name === name)

                displayTickets(selectedTickets)
                document.getElementById("searchName").value = ""
            }


            function addTicket(name, location, date, duration)
            {
                let newTicket = {id: uniqueId, name: name, location: location, date: date, duration: duration}
                tickets.push(newTicket)

                uniqueId++

                displayTickets(tickets)
                document.getElementById("addName").value = ""
                document.getElementById("addLocation").value = ""
                document.getElementById("addDate").value = ""
                document.getElementById("addDuration").value = ""
            }


            function modifyTicket(id, date)
            {
                tickets.map(ticket =>
                {
                    if (ticket.id === id)
                    {
                        
                        ticket.date = date
                        

                    }
                })

                displayTickets(tickets)
                
                document.getElementById("modifyDate").value = ""
               
            }


            function deleteTicket(id)
            {
                let selectedIndex
                tickets.map((ticket, index) =>
                {
                    if (ticket.id === id)
                    {
                        selectedIndex = index
                    }
                })

                tickets.splice(selectedIndex, 1)

                displayTickets(tickets)
                document.getElementById("deleteId").value = ""
            }
