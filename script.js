const showCurrentDay = () => {
    const DateString = moment().format('dddd') + ", " + moment().format("ll")
    $("#currentDay").prop("innerHTML", DateString);
};

function getTimeBlockTextfromStorage() {
    $(".row").toArray().forEach(element => {
        if (localStorage.getItem(element.id) !== null) {
            element.children[1].value =localStorage.getItem(element.id);
        }
        
    });
}
showCurrentDay();
getTimeBlockTextfromStorage();
$(".time-block").on("click", function (e) {
    if (this.value === "No Event") {
        this.value = "";
    }
    e.preventDefault();
    const saveButton = this.parentNode.lastElementChild;
    console.log(saveButton);

    saveButton.addEventListener("click", (e) => {
        var stateText = this.parentNode.children[1].value;
        console.log(stateText);
        var elementKey = $(this).parent().attr('id')
        localStorage.setItem(elementKey,stateText);
        e.preventDefault();
    })

})




function addColorstoTimeBlocks() {
    // get current number of hours
    var currentHour = moment().hours();
    // loop over each time block
    $('.time-block').each(function () {
      var timeId = parseInt($(this).parent().attr('id'));
        console.log(timeId);
      // if the time Id attribute is before the current hour, add the past class
      if (timeId < currentHour) {
        $(this).addClass('past');
      } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
      else if (timeId === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
}
  
addColorstoTimeBlocks();
  