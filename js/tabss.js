function openTab(evt, tabName) {
    
    var i, tabContent, tabButtons;

    
    tabContent = document.getElementsByClassName("tab-panel");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    
    tabButtons = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function changeCert(stackIdOrDirection, direction) {
    let container;
    
    if (typeof stackIdOrDirection === 'string') {
        container = document.getElementById(stackIdOrDirection);
    } else {
        container = event.target.closest('.stack-container');
        direction = stackIdOrDirection;   }

    const cards = container.querySelectorAll('.cert-card');
    let activeIndex = Array.from(cards).findIndex(card => card.classList.contains('active'));

    cards[activeIndex].classList.remove('active');

    activeIndex += direction;

    if (activeIndex >= cards.length) {
        activeIndex = 0;
    } else if (activeIndex < 0) {
        activeIndex = cards.length - 1;
    }

    cards[activeIndex].classList.add('active');
}

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");


const images = document.querySelectorAll("article img");

images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};


modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        document.body.style.overflow = "hidden";
    });
});

closeBtn.onclick = closeModal;

modal.onclick = function(e) {
    if (e.target === modal) {
        closeModal();
    }
};