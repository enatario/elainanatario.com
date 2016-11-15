var tagEl = document.querySelector('.note--tag')
var noteEl = document.querySelector('.note')
tagEl.addEventListener('click', function(e) {
    e.preventDefault()
    var isHidden = noteEl.classList.contains('slide-hide')
    if (isHidden) noteEl.classList.remove('slide-hide')
    else noteEl.classList.add('slide-hide')
})