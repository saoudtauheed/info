
function displayEvents() {
  var selectedDate = document.getElementById("dateInput").value;
  var events = [
      {date: '2024-01-09',event: 'Commencement of classes'},
      {date: '2024-02-23',event: 'Annual Fest "invertia"'},
      {date: '2024-02-24',event: 'Annual Fest "invertia"'},
      {date:'2024-05-11',event: 'Last Day of Teaching'},
      {date:'2024-05-06',event: 'Admit card distribution'},
      {date:'2024-05-07',event: 'Admit card distribution'},
      {date:'2024-05-08',event: 'Practicals start'},
      {date:'2024-05-06',event: 'Admit card distribution'},
      {date:'2024-06-17',event: 'Summer break'},
      {date:'2024-06-19',event: 'Result declaration'},
      {date:'2024-01-01',event: 'Happy New Year, may this new year your all dreams come true'},
      {date: '2024-01-13',event: 'Lohri'},
      {date:'2024-01-14',event: 'Makar Sankranti'},
      {date:'2024-01-15',event:'Pongal'},
      {date:'2024-01-17',event: 'Guru Govind Singh Jayanti'},
      {date:'2024-01-25',event:' Hazrat Ali birthday'},
      {date:'2024-01-26',event: 'Republic Day'},
      {date:'2024-02-14',event: 'Vasant Panchami'},
      {date:'2024-02-19',event: 'Shivaji Jayanti'},
      {date:'2024-02-24',event:'Guru Ravidas Jayanti'},
      {date:'2024-03-08',event: 'Shivratri'},
      {date:'2024-03-12',event: 'Ramadan Kareem'},
      {date:'2024-03-24',event: 'Holika Dahan'},
      {date:'2024-03-25',event: 'Happy Holi'},
      {date: '2024-03-29',event: 'Good Friday'},
      {date:'2024-03-31',event: 'Easter'},
      {date:'2024-04-05',event: 'Jamat-ul-vida'},
      {date:'2024-04-09',event: 'Navratri'},
      {date: '2024-04-11',event: 'Eid-ul-Fiter'},
      {date:'2024-04-13',event: 'Vaisakhi'},
      {date: '2024-04-14',event: 'Ambedkar' },
      {date:'2024-04-21',event: 'Mahavir Jayanti'},
      {date: '2024-05-08',event: 'Birth of Rabindranath'},
      {date: '2024-05-23',event: 'Buddha Purnima'},
      {date: '2024-06-17',event: 'Bakra Eid'},
      {date:'2024-07-17',event: 'Muharram'},
      {date:'2024-08-15',event: 'Independence Day'},
      {date:'2024-08-19',event: 'Happy Rakshabandhan'},
      {date:'2024-08-26',event: 'Janmashtami'},
      {date: '2024-09-07',event: 'Ganesh Mahotsav'},
      {date: '2024-09-15',event: 'Onam'},
      {date:'2024-09-16',event: 'Milad un Nabi'},
      {date: '2024-10-02',event: 'Mahatma Gandhi Jayanti'},
      {date:'2024-10-03',event: 'Sharad Navratri'},
      {date:'2024-10-09',event: 'Durga Puja'},
      {date:'2024-10-11',event: 'Maha Navami'},
      {date:'2024-10-12',event: 'Happy Dussehra'},
      {date:'2024-10-17',event: 'Valmiki Jayanti'},
      {date:'2024-10-20',event: 'Karva Chauth'},
      {date:'2024-10-31',event: 'Happy Diwali'},
      {date:'2024-11-02',event: 'Govardhan Puja'},
      {date:'2024-11-03',event: 'Bhai Duj'},
      {date:'2024-11-07',event: 'Chhath Puja'},
      {date:'2024-11-15',event: 'Guru Nanak Jayanti'},
      {date:'2024-11-24',event: 'Guru Teg Jayanti'},
      {date:'2024-12-24',event: 'Christmas Eve'},
      {date: '2024-12-25',event: 'Christmas'}
      ];

  var eventTableBody = document.getElementById("eventTableBody");
  eventTableBody.innerHTML = ""; 

  var filteredEvents = events.filter(function (event) {
    return selectedDate === "" || event.date === selectedDate;
    
  });
  console.log(filteredEvents);

  filteredEvents.forEach(function (event) {
   
    var row = "<tr><td>" + event.date + "</td><td>" + event.event + "</td></tr>";
    eventTableBody.innerHTML += row;
  });
}