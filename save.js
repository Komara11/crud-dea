function save() {
  let contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];
  let id;
  contactList.length != 0
    ? contactList.findLast((item) => (id = item.id))
    : (id = 0);

  if (document.getElementById("id").value) {
    contactList.forEach((value) => {
      if (document.getElementById("id").value == value.id) {
        value.name = document.getElementById("name").value;
        value.age = document.getElementById("age").value;
        value.complaint = document.getElementById("complaint").value;
        value.diagnosis = document.getElementById("diagnosis").value;
        value.datetime = document.getElementById("datetime").value;
      }
    });
    document.getElementById("id").value = "";
  } else {
    const item = {
      id: id + 1,
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      complaint: document.getElementById("complaint").value,
      diagnosis: document.getElementById("diagnosis").value,
      datetime: document.getElementById("datetime").value,
    };
    contactList.push(item);
  }

  localStorage.setItem("listItem", JSON.stringify(contactList));
  allData();
  document.getElementById("form").reset();
}
