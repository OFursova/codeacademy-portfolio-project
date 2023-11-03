document.addEventListener("DOMContentLoaded", function () {

    function changeHeartColor() {
        const heart = document.querySelector('.fa-heart');
        const colours = ['red', 'purple', 'gold', 'green', 'deeppink'];

        let currentIndex = 0;

        setInterval(function () {
            heart.style.color = colours[currentIndex];
            currentIndex = (currentIndex + 1) % colours.length;
        }, 3000);
    }

    function openModal(imgElement) {
        var modal = createModal();
        var modalImage = document.createElement('img');
        modalImage.className = 'modal-content';
        modal.appendChild(modalImage);

        modalImage.src = imgElement.src;

        var closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times';
        closeBtn.onclick = function () {
            closeModal(modal);
        };
        modal.appendChild(closeBtn);

        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    function createModal() {
        var modal = document.createElement('div');
        modal.className = 'modal';
        document.body.appendChild(modal);
        return modal;
    }


    document.getElementById("currentYear").innerHTML = '&copy; ' + new Date().getFullYear();
    changeHeartColor();

    const projectImages = document.getElementsByClassName('project-image');

    for (const image of projectImages) {
        image.addEventListener("click", function () {
            openModal(image);
        });
    }

});