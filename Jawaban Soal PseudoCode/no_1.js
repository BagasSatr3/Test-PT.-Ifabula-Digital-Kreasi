function grade(n) {
  if (n <= 60) {
    console.log("KURANG");
  } else if (n > 60 && n <= 70) {
    console.log("CUKUP");
  } else if (n > 70 && n <= 80) {
    console.log("BAIK");
  } else if (n > 80) {
    console.log("LUAR BIASA");
  } else {
    console.log("INVALID INPUT!");
  }
}

function grade2(n) {
  let result;

  switch (true) {
    case n <= 60:
      result = "KURANG";
      break;
    case n <= 70:
      result = "CUKUP";
      break;
    case n <= 80:
      result = "BAIK";
      break;
    case n > 80:
      result = "LUAR BIASA";
      break;

    default:
      result = "INVALID INPUT!";
      break;
  }

  console.log(result);
}

grade(75);
grade2(69);
