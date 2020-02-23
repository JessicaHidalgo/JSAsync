console.log("Hola");

var getUsers = async id => {
  var response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  var data = await response.json();
  return data.name;
};

var getId = async () => {
  var ids = document.getElementById("input").value;
  var resultado = await getUsers(ids);
  var div = document.getElementById("container");
  var content = document.createElement("div");
  content.innerText = resultado;
  div.appendChild(content);
};
