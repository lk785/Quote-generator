const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  let getData = async function () {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    const display = data[Math.floor(Math.random() * 10 + 1)];
    const author = display.author;
    const text = display.text;
    document.querySelector(".quote").innerHTML = `&ldquo;${text}&rdquo;`;
    document.querySelector(".author").innerHTML = "~by " + author;
  };
  getData();
});
