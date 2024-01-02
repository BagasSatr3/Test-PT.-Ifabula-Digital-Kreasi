function numbers(x) {
  if (typeof x !== "number" || isNaN(x)) {
    console.log("Invalid Input!");
    return;
  }

  if (x <= 2000) {
    console.log("Input Must Be Above 2000!");
    return;
  }

  const namaDigit = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
  ];

  const namaUnit = ["", "Ribu", "Juta", "Miliar"];

  const sNum = x.toString().split("").map(Number);

  let terbilang = "";

  for (let i = 0, len = sNum.length; i < len; i++) {
    const digit = sNum[i];
    const unit = namaUnit[len - i - 1];

    if (digit !== 0) {
      terbilang += namaDigit[digit] + " " + unit + " ";
    }
  }

  console.log(terbilang.trim());
}

numbers(2234);
numbers(8500);
numbers(7001);
numbers("abc");
numbers(1500);
