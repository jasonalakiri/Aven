// console.log("App Loaded");
const logBtn = document.getElementById("logButton");
//gets today's Date in YYYY-MM-DD format
function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

logBtn.addEventListener("click", function () {
  console.log("Logged for", getToday());
});





















