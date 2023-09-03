const setClock = () => {
    const today = new Date();
  
    const { hours, minutes, seconds, period } = formatTime(today);
  
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;
    document.querySelector(".period").textContent = period;
  
    document.querySelector(".date").textContent = formatDate(today);
  };