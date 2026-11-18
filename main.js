const gaaliyan = [
  "Abe saale! 😂",
  "Kamine!",
  "Ullu ke patthhe!",
  "Chutiye!",
  "Bhadwe!",
  "Nalayak insaan!",
  "Akal ke dushman!",
  "Dimag ghar bhool aaye kya?",
  "Gadhe ki aulaad!",
  "Nikammee!",
  "Besharam insaan!",
  "Baklol kahin ka!",
  "Harami!",
  "Lodu kahin ka!",
  "Madarchod!",
  "Behenchod!",
  "Chutiya number one!",
  "Gadhe ka bachcha!",
  "Saale mahaan bewakoof!",
  "Dimaag se paidal!",
  "Bakwaas ki dukaan!",
  "Nalla insaan!",
  "Bhadwa kahin ka!",
  "Akal naam ki cheez hai bhi?",
  "Saale nautanki!",
];

let currentIndex = 0;
let isGenerating = false;

function showIndianGaaliyan() {
  if (isGenerating) return;

  const result = document.getElementById("result");
  const button = document.getElementById("generateBtn");

  isGenerating = true;
  button.disabled = true;
  button.textContent = "Generating... 🔥";

  currentIndex = 0;

  function showNext() {
    if (currentIndex >= gaaliyan.length) {
      isGenerating = false;
      button.disabled = false;
      button.textContent = "Generate Again 🔥";
      return;
    }

    result.classList.remove("active");
    void result.offsetWidth;

    result.textContent = gaaliyan[currentIndex];
    result.classList.add("active");

    currentIndex++;

    setTimeout(showNext, 1200);
  }

  showNext();
}
