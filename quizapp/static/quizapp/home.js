
const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalBody = document.getElementById('modal-body-confirm')
const startBtn = document.getElementById('start-button')

modalBtns.forEach(modalBtn => modalBtn.addEventListener('click', () => {
    const pk = modalBtn.getAttribute('data-pk')
    const name = modalBtn.getAttribute('data-quiz')
    const numQuestions = modalBtn.getAttribute('data-questions')
    const difficulty = modalBtn.getAttribute('data-difficulty')
    const time = modalBtn.getAttribute('data-time')
    const scoreToPass = modalBtn.getAttribute('data-pass')


    modalBody.innerHTML = `
    <div class ="h5 mb-3">Are you sure you want to begin "<b>${name} Quiz</b>" ?</div>

    <div class="text-muted">
        <ul>
            <li>Number of questions are: ${numQuestions}</li>
            <li>Difficulty level: ${difficulty}</li>
            <li>Time: ${time} minute(s)</li>
            <li>Score to pass: ${scoreToPass}%</li>
        </ul>
    </div>
   `
    startBtn.addEventListener('click', () => {
        window.location.href = window.location.href + pk 
    })
}))


