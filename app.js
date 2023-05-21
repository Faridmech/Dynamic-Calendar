const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icon span");


let date = new Date(),
currYear =date.getFullYear(),
currMont = date.getMonth();


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const renderCalendar = ()=>{
    let lastDateofMonth = new Date(currYear, currMont +1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMont, lastDateofMonth).getDay(),
    lastDayofLastMonth = new Date(currYear, currMont, 0).getDate(),
    firstDayofMonth = new Date(currYear, currMont, 1).getDay();
    let liTag = '';
 
    for(let i =firstDayofMonth ; i>0; i--){
      liTag += `<li class="inactive">${lastDayofLastMonth - i +1}</li>`
    }


    for(let i = 1 ; i <= lastDateofMonth; i++){
      let isToday = i === date.getDate() && currMont === new Date().getMonth() ? "active" : "";
      liTag += `<li class="${isToday}" > ${i} </li>`
      
    }


    for(let i = lastDayofMonth; i< 6; i++){
      liTag += `<li class="inactive">${i - lastDayofMonth +1}</li>`
    }

    currentDate.innerText = `${months[currMont]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar()

prevNextIcon.forEach(icon=>{
  icon.addEventListener('click', ()=>{
    currMont = icon.id === "prev"? currMont - 1: currMont + 1;
    if(currMont < 0 || currMont > 11){
      date = new Date(currYear, currMont)
      currYear = date.getFullYear();
      currMont = date.getMonth()
    }else{
      date = new Date();
    }
    renderCalendar()
  })
})