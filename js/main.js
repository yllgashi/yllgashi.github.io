window.addEventListener("load", () => {
  setFooterDateText();
});

const setFooterDateText = () => {
  document.getElementById("date-in-footer").innerText = getCurrentDateInformation();
};

const getCurrentDateInformation = () => {
  return new Date().toLocaleString("en-us", { month: "short", year: "numeric" });
};
