$('.selectReward').click(getModal)

function getModal() {
    if (!this.disabled) {
        $('.modal1').show()
        $('#header').css({opacity:'0.2'})
        $('#main').css({opacity:'0.2'})
    }
}

$('.close-btn').click(closeModal)
// $(window).click(closeModal)

function closeModal() {
    if (!this.disabled) {
        $('.modal1').hide()
        $('#header').css({opacity:'1'})
        $('#main').css({opacity:'1'})
    }
}

$('.modal-selectable').click(enterAmount) 

function hideAllAmount() {
    $('.modal-selectable').children('.enter-amount').hide()
}

function enterAmount() {
    hideAllAmount() //used to prevent multiple options from being open.
    $(this).children('.enter-amount').show()
}


$('.inputDollar').click(thankYouModal)

function thankYouModal() {
    $('.modal1').hide()
    $('#header').css({opacity:'0.2'})
    $('#main').css({opacity:'0.2'})
    $('.modal2').show()
}

$('.thankYouButton').click(function() {
    $('.modal2').hide()
    $('#header').css({opacity:'1'})
    $('#main').css({opacity:'1'})
})