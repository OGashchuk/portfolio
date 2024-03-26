window.addEventListener('DOMContentLoaded', function() {
    var countryCodes = {
        RU: {
            commentName1: "Владимир Мотылев",
            commentName2: "Наталья Григоренко",
            commentName3: "Анна Моисеева",
        },
        KZ: {
            commentName1: "Ерден Ахметов",
            commentName2: "Нагиша Омарова",
            commentName3: "Гульдара Алиева",
        },
    };


    var change = function change(e) {
        var commentName1 = document.querySelectorAll(".comment-name1"),
            commentName2 = document.querySelectorAll(".comment-name2"),
            commentName3 = document.querySelectorAll(".comment-name3");

        commentName1.forEach(function(elem) {
            if (elem) {
                elem.innerHTML = countryCodes[e].commentName1;
            }
        });
        commentName2.forEach(function(elem) {
            if (elem) {
                elem.innerHTML = countryCodes[e].commentName2;
            }
        });
        commentName3.forEach(function(elem) {
            if (elem) {
                elem.innerHTML = countryCodes[e].commentName3;
            }
        });
    }
    selectors.forEach(function(elem) {
        elem.addEventListener('change', function(e) {
            if (Object.keys(countryCodes).includes(e.target.value)) {
                change(e.target.value);
            }
        });
    });

    if (Object.keys(countryCodes).includes(selectors[0].value)) {
        change(selectors[0].value);
    }
})