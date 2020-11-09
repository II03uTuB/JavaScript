let message;

let message = (login == 'worker') ? 'hello' :
  (login == 'director') ? 'Good morning' :
  (login == '') ? 'No Login' :
  '';