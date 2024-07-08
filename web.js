function displayEvents() {
  var selectedDate = document.getElementById("dateInput").value;
  var events = {
    '2024-01-09': ['Commencement of classes'],
    '2024-02-23': ['Annual Fest "invertia"'],
    '2024-02-24': ['Annual Fest "invertia"'],
    '2024-05-11': ['Last Day of Teaching'],
    '2024-05-06': ['Admit card distribution'],
    '2024-05-07': ['Admit card distribution'],
    '2024-05-08': ['Practicals start'],
    '2024-05-06': ['Admit card distribution'],
    '2024-06-17': ['Summer break'],
    '2024-06-19': ['Result declaration'],
    '2024-01-01': ['Happy New Year, may this new year your all dreams come true'],
    '2024-01-13': ['Lohri'],
    '2024-01-14': ['Makar Sankranti'],
    '2024-01-15': ['Pongal'],
    '2024-01-17': ['Guru Govind Singh Jayanti'],
    '2024-01-25': ['Hazrat Ali birthday'],
    '2024-01-26': ['Republic Day'],
    '2024-02-14': ['Vasant Panchami'],
    '2024-02-19': ['Shivaji Jayanti'],
    '2024-02-24': ['Guru Ravidas Jayanti'],
    '2024-03-08': ['Shivratri'],
    '2024-03-12': ['Ramadan Kareem'],
    '2024-03-24': ['Holika Dahan'],
    '2024-03-25': ['Happy Holi'],
    '2024-03-29': ['Good Friday'],
    '2024-03-31': ['Easter'],
    '2024-04-05': ['Jamat-ul-vida'],
    '2024-04-09': ['Navratri'],
    '2024-04-11': ['Eid-ul-Fiter'],
    '2024-04-13': ['Vaisakhi'],
    '2024-04-14': ['Ambedkar Jayanti'],
    '2024-04-17': ['Ram Navami'],
    '2024-04-21': ['Mahavir Jayanti'],
    '2024-05-08': ['Birth of Rabindranath'],
    '2024-05-23': ['Buddha Purnima'],
    '2024-06-17': ['Bakra Eid'],
    '2024-07-17': ['Muharram'],
    '2024-08-15': ['Independence Day'],
    '2024-08-19': ['Happy Rakshabandhan'],
    '2024-08-26': ['Janmashtami'],
    '2024-09-07': ['Ganesh Mahotsav'],
    '2024-09-15': ['Onam'],
    '2024-09-16': ['Milad un Nabi'],
    '2024-10-02': ['Mahatma Gandhi Jayanti'],
    '2024-10-03': ['Sharad Navratri'],
    '2024-10-09': ['Durga Puja'],
    '2024-10-11': ['Maha Navami'],
    '2024-10-12': ['Happy Dussehra'],
    '2024-10-17': ['Valmiki Jayanti'],
    '2024-10-20': ['Karva Chauth'],
    '2024-10-31': ['Happy Diwali'],
    '2024-11-02': ['Govardhan Puja'],
    '2024-11-03': ['Bhai Duj'],
    '2024-11-07': ['Chhath Puja'],
    '2024-11-15': ['Guru Nanak Jayanti'],
    '2024-11-24': ['Guru Teg Jayanti'],
    '2024-12-24': ['Christmas Eve'],
    '2024-12-25': ['Christmas']
  };

  var eventTableBody = document.getElementById("eventTableBody");
  eventTableBody.innerHTML = ""; // Clear existing rows

  if (events[selectedDate]) {
    events[selectedDate].forEach(function (event) {
      var row = "<tr><td>" + selectedDate + "</td><td>" + event + "</td></tr>";
      eventTableBody.innerHTML += row;
    });
  } else {
    var row = "<tr><td colspan='2'>No events found for selected date.</td></tr>";
    eventTableBody.innerHTML += row;
  }

  // Function to show the attendance form
function showAttendanceForm() {
  var attendanceForm = document.getElementById("attendanceForm");
  attendanceForm.style.display = "block";
}

// Function to submit attendance
function submitAttendance(event) {
  event.preventDefault(); // Prevent form submission
  var studentNameInput = document.getElementById("studentName");
  var studentName = studentNameInput.value.trim();
  
  // Replace this with your logic to handle attendance submission
  alert("Attendance submitted for: " + studentName);
  
  // Reset the form
  document.getElementById("attendanceForm").reset();
  return false;
}

// Event listener to submit attendance form
document.getElementById("attendanceForm").addEventListener("submit", submitAttendance);

}
