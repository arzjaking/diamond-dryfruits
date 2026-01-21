const btn = document.querySelector('.main__btn');
const bigLabel = document.querySelector('.big__label');
const content = document.querySelector('.content');

const header = document.querySelector('.header');



function fncOpen() {
    bigLabel.classList.add('big__container-active');
    content.classList.add('content-active');
    header.classList.add('d__none')
}
function fncClose() {
    bigLabel.classList.remove('big__container-active');
    content.classList.remove('content-active');
    header.classList.remove('d__none')
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        fncClose();
    }
});

function validation(form) {
    function removeErrors(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }

    }

    let result = true;
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('p');
        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;
        parent.append(errorLabel);
        parent.classList.add('error');


    }




    const AllInputs = form.querySelectorAll('input');
    for (const input of AllInputs) {

        removeErrors(input);


        if (input.dataset.minLength) {

            if (input.value.length < input.dataset.minLength) {
                removeErrors(input);
                createError(input, `Минимальная длина ${input.dataset.minLength} символов`);
                result = false;
            }
        }


        if (input.value == "") {
            removeErrors(input);
            createError(input, "Заполните поле");
            result = false;
        }
    }


    return result;
};

document.getElementById('auth').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validation(this) == true) {
        alert('Форма отправлена');
        fncClose();
    }

});