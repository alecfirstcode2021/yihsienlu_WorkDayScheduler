// Moment declaration for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentTime = moment();
// Set current time to the integrated hour like over 12:30 becomes 12:00
currentTime = currentTime.startOf("hour");
// Set the start of day + 9 to return 9 am
var beforeTime = moment().startOf('day').add(9, "hours");

// Time block 9 AM 
var time09 = beforeTime.add(0, "h");
// var time09 = beforeTime;
time09 = time09.format('hh:mm A');
// Populates time formula into html
$(".block1").text(time09);
// 10 AM
var time10 = beforeTime.add(1, "h");
time10 = time10.format('hh:mm A');

$(".block2").text(time10);
// 11 AM
var time11 = beforeTime.add(1, "h");
time11 = time11.format('hh:mm A');

$(".block3").text(time11);
// 12 PM
var time12 = beforeTime.add(1, "h");
time12 = time12.format('hh:mm A');

$(".block4").text(time12);
// 1 PM
var time13 = beforeTime.add(1, "h");
time13 = time13.format('hh:mm A');

$(".block5").text(time13);
// 2 PM
var time14 = beforeTime.add(1, "h");
time14 = time14.format('hh:mm A');

$(".block6").text(time14);
// 3 PM
var time15 = beforeTime.add(1, "h");
time15 = time15.format('hh:mm A');

$(".block7").text(time15);
// 4 PM
var time16 = beforeTime.add(1, "h");
time16 = time16.format('hh:mm A');

$(".block8").text(time16);
// 5 PM
var time17 = beforeTime.add(1, "h");
time17 = time17.format('hh:mm A');

$(".block9").text(time17);

function testTime() {
    // 1st-time 9AM
    time09 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // 1st-time if/else
    if (currentTime.isAfter(time09)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time09)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time09)) {
        $(".form9").addClass("present");
    };
    // 10AM
    time10 = moment().startOf('day').add(10, "hours");
    // 10AM if/else
    if (currentTime.isAfter(time10)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
        $(".form10").addClass("present");
    };
    //  11AM
    time11 = moment().startOf('day').add(11, "hours");
    // 11AM if/else
    if (currentTime.isAfter(time11)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time11)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time11)) {
        $(".form11").addClass("present");
    };
    //  12PM
    time12 = moment().startOf('day').add(12, "hours");
    // 12PM if/else
    if (currentTime.isAfter(time12)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time12)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time12)) {
        $(".form12").addClass("present");
    };
    // time13 1PM
    time13 = moment().startOf('day').add(13, "hours");
    // 1PM if/else
    if (currentTime.isAfter(time13)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time13)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time13)) {
        $(".form1").addClass("present");
    };
    // time14 2PM
    time14 = moment().startOf('day').add(14, "hours");
    // 2PM if/else
    if (currentTime.isAfter(time14)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time14)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time14)) {
        $(".form2").addClass("present");
    };
    // time15 3PM
    time15 = moment().startOf('day').add(15, "hours");
    // 3PM if/else
    if (currentTime.isAfter(time15)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time15)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time15)) {
        $(".form3").addClass("present");
    };
    // time16 4pm
    time16 = moment().startOf('day').add(16, "hours");
    // 4PM if/else
    if (currentTime.isAfter(time16)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time16)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time16)) {
        $(".form4").addClass("present");
    };
    // time17 5pm
    time17 = moment().startOf('day').add(17, "hours");
    // 5PM if/else
    if (currentTime.isAfter(time17)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time17)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time17)) {
        $(".form5").addClass("present");
    };
}
testTime();
// Loops: input area to get item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// Test loop:
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(dataHour);
}
// Event listener click then to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});

