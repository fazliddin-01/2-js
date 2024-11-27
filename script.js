let son = +prompt("Son kiriting")

while (son == "" || son == 0 || isNaN(son)) {
  son = +prompt('son kiriting')
}

alert("kiritgan soningiz: " + son)