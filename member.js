function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var projectsList = document.getElementById("projectsList");
    var contactList = document.getElementById("contactList");
    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    memberList.style.color = "white";
    skillsList.style.color = "black";
    projectsList.style.color = "black";
    contactList.style.color = "black";
}