let place_one_x = Math.floor(Math.random() * 2001 + 100)
let place_one_y = Math.floor(Math.random() * 1001 + 100)
let place_two_x = Math.floor(Math.random() * 2001 + 100)
let place_two_y = Math.floor(Math.random() * 1001 + 100)
let place_three_x = Math.floor(Math.random() * 2001 + 100)
let place_three_y = Math.floor(Math.random() * 1001 + 100)
let place_four_x = Math.floor(Math.random() * 2001 + 100)
let place_four_y = Math.floor(Math.random() * 1001 + 100)
let place_five_x = Math.floor(Math.random() * 2001 + 100)
let place_five_y = Math.floor(Math.random() * 1001 + 100)
let place_six_x = Math.floor(Math.random() * 2001 + 100)
let place_six_y = Math.floor(Math.random() * 1001 + 100)
let place_seven_x = Math.floor(Math.random() * 2001 + 100)
let place_seven_y = Math.floor(Math.random() * 1001 + 100)
let place_eight_x = Math.floor(Math.random() * 2001 + 100)
let place_eight_y = Math.floor(Math.random() * 1001 + 100)
let place_nine_x = Math.floor(Math.random() * 2001 + 100)
let place_nine_y = Math.floor(Math.random() * 1001 + 100)
let place_ten_x = Math.floor(Math.random() * 2001 + 100)
let place_ten_y = Math.floor(Math.random() * 1001 + 100)



$('#start').click(function() {
    //one
    $('#one').css('left', place_one_x + 'px')
    $('#one').css('top', place_one_y + 'px')
    while (place_one_x == place_two_x && place_one_x == place_three_x && place_one_x == place_four_x && place_one_x == place_five_x && place_one_x == place_six_x && place_one_x == place_seven_x && place_one_x == place_eight_x && place_one_x == place_nine_x && place_one_x == place_ten_x) {
        place_one_x = Math.floor(Math.random() * 2001)
    }
    while (place_one_y == place_two_y && place_one_y == place_three_y && place_one_y == place_four_y && place_one_y == place_five_y && place_one_y == place_six_y && place_one_y == place_seven_y && place_one_y == place_eight_y && place_one_y == place_nine_y && place_one_y == place_ten_y) {
        place_one_y = Math.floor(Math.random() * 2001)
    }

    //two
    $('#two').css('left', place_two_x + 'px')
    $('#two').css('top', place_two_y + 'px')
    while (place_two_x == place_one_x && place_two_x == place_three_x && place_two_x == place_four_x && place_two_x == place_five_x && place_two_x == place_six_x && place_two_x == place_seven_x && place_two_x == place_eight_x && place_two_x == place_nine_x && place_two_x == place_ten_x) {
        place_two_x = Math.floor(Math.random() * 2001)
    }
    while (place_two_y == place_one_y && place_two_y == place_three_y && place_two_y == place_four_y && place_two_y == place_five_y && place_two_y == place_six_y && place_two_y == place_seven_y && place_two_y == place_eight_y && place_two_y == place_nine_y && place_two_y == place_ten_y) {
        place_two_y = Math.floor(Math.random() * 2001)
    }

    //three
    $('#three').css('left', place_three_x + 'px')
    $('#three').css('top', place_three_y + 'px')
    while (place_three_x == place_two_x && place_three_x == place_one_x && place_three_x == place_four_x && place_three_x == place_five_x && place_three_x == place_six_x && place_three_x == place_seven_x && place_three_x == place_eight_x && place_three_x == place_nine_x && place_three_x == place_ten_x) {
        place_three_x = Math.floor(Math.random() * 2001)
    }
    while (place_three_y == place_two_y && place_three_y == place_one_y && place_three_y == place_four_y && place_three_y == place_five_y && place_three_y == place_six_y && place_three_y == place_seven_y && place_three_y == place_eight_y && place_three_y == place_nine_y && place_three_y == place_ten_y) {
        place_three_y = Math.floor(Math.random() * 2001)
    }

    //four
    $('#four').css('left', place_four_x + 'px')
    $('#four').css('top', place_four_y + 'px')
    while (place_four_x == place_two_x && place_four_x == place_one_x && place_four_x == place_three_x && place_four_x == place_five_x && place_four_x == place_six_x && place_four_x == place_seven_x && place_four_x == place_eight_x && place_four_x == place_nine_x && place_four_x == place_ten_x) {
        place_four_x = Math.floor(Math.random() * 2001)
    }
    while (place_four_y == place_two_y && place_four_y == place_one_y && place_four_y == place_three_y && place_four_y == place_five_y && place_four_y == place_six_y && place_four_y == place_seven_y && place_four_y == place_eight_y && place_four_y == place_nine_y && place_four_y == place_ten_y) {
        place_four_y = Math.floor(Math.random() * 2001)
    }

    //five
    $('#five').css('left', place_five_x + 'px')
    $('#five').css('top', place_five_y + 'px')
    while (place_five_x == place_two_x && place_five_x == place_one_x && place_five_x == place_three_x && place_five_x == place_four_x && place_five_x == place_six_x && place_five_x == place_seven_x && place_five_x == place_eight_x && place_five_x == place_nine_x && place_five_x == place_ten_x) {
        place_five_x = Math.floor(Math.random() * 2001)
    }
    while (place_five_y == place_two_y && place_five_y == place_one_y && place_five_y == place_three_y && place_five_y == place_four_y && place_five_y == place_six_y && place_five_y == place_seven_y && place_five_y == place_eight_y && place_five_y == place_nine_y && place_five_y == place_ten_y) {
        place_five_y = Math.floor(Math.random() * 2001)
    }

    //six
    $('#six').css('left', place_six_x + 'px')
    $('#six').css('top', place_six_y + 'px')
    while (place_six_x == place_two_x && place_six_x == place_one_x && place_six_x == place_three_x && place_six_x == place_four_x && place_six_x == place_five_x && place_six_x == place_seven_x && place_six_x == place_eight_x && place_six_x == place_nine_x && place_six_x == place_ten_x) {
        place_six_x = Math.floor(Math.random() * 2001)
    }
    while (place_six_y == place_two_y && place_six_y == place_one_y && place_six_y == place_three_y && place_six_y == place_four_y && place_six_y == place_five_y && place_six_y == place_seven_y && place_six_y == place_eight_y && place_six_y == place_nine_y && place_six_y == place_ten_y) {
        place_six_y = Math.floor(Math.random() * 2001)
    }

    //seven
    $('#seven').css('left', place_seven_x + 'px')
    $('#seven').css('top', place_seven_y + 'px')
    while (place_seven_x == place_two_x && place_seven_x == place_one_x && place_seven_x == place_three_x && place_seven_x == place_four_x && place_seven_x == place_five_x && place_seven_x == place_six_x && place_seven_x == place_eight_x && place_seven_x == place_nine_x && place_seven_x == place_ten_x) {
        place_seven_x = Math.floor(Math.random() * 2001)
    }
    while (place_seven_y == place_two_y && place_seven_y == place_one_y && place_seven_y == place_three_y && place_seven_y == place_four_y && place_seven_y == place_five_y && place_seven_y == place_six_y && place_seven_y == place_eight_y && place_seven_y == place_nine_y && place_seven_y == place_ten_y) {
        place_seven_y = Math.floor(Math.random() * 2001)
    }

    //eight
    $('#eight').css('left', place_eight_x + 'px')
    $('#eight').css('top', place_eight_y + 'px')
    while (place_eight_x == place_two_x && place_eight_x == place_one_x && place_eight_x == place_three_x && place_eight_x == place_four_x && place_eight_x == place_five_x && place_eight_x == place_six_x && place_eight_x == place_seven_x && place_eight_x == place_nine_x && place_eight_x == place_ten_x) {
        place_eight_x = Math.floor(Math.random() * 2001)
    }
    while (place_eight_y == place_two_y && place_eight_y == place_one_y && place_eight_y == place_three_y && place_eight_y == place_four_y && place_eight_y == place_five_y && place_eight_y == place_six_y && place_eight_y == place_seven_y && place_eight_y == place_nine_y && place_eight_y == place_ten_y) {
        place_eight_y = Math.floor(Math.random() * 2001)
    }

    //nine
    $('#nine').css('left', place_nine_x + 'px')
    $('#nine').css('top', place_nine_y + 'px')
    while (place_nine_x == place_two_x && place_nine_x == place_one_x && place_nine_x == place_three_x && place_nine_x == place_four_x && place_nine_x == place_five_x && place_nine_x == place_six_x && place_nine_x == place_seven_x && place_nine_x == place_eight_x && place_nine_x == place_ten_x) {
        place_nine_x = Math.floor(Math.random() * 2001)
    }
    while (place_nine_y == place_two_y && place_nine_y == place_one_y && place_nine_y == place_three_y && place_nine_y == place_four_y && place_nine_y == place_five_y && place_nine_y == place_six_y && place_nine_y == place_seven_y && place_nine_y == place_eight_y && place_nine_y == place_ten_y) {
        place_nine_y = Math.floor(Math.random() * 2001)
    }

    //ten
    $('#ten').css('left', place_ten_x + 'px')
    $('#ten').css('top', place_ten_y + 'px')
    while (place_ten_x == place_two_x && place_ten_x == place_one_x && place_ten_x == place_three_x && place_ten_x == place_four_x && place_ten_x == place_five_x && place_ten_x == place_six_x && place_ten_x == place_seven_x && place_ten_x == place_eight_x && place_ten_x == place_nine_x) {
        place_ten_x = Math.floor(Math.random() * 2001)
    }
    while (place_ten_y == place_two_y && place_ten_y == place_one_y && place_ten_y == place_three_y && place_ten_y == place_four_y && place_ten_y == place_five_y && place_ten_y == place_six_y && place_ten_y == place_seven_y && place_ten_y == place_eight_y && place_ten_y == place_nine_y) {
        place_ten_y = Math.floor(Math.random() * 2001)
    }
})