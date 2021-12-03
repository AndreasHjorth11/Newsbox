const swipe = document.querySelector(".swipeItem");
let touchCoordinatesStart;
let touchCoordinatesMove;
let touchCoordinatesEnd;
let touchElement;
let touchParentElement;
let deleteButton = window.screen.width * 0.4;
let linkButton = window.screen.width / 0.4;
let deleteStorage = window.localStorage;
let newsList = [];
if(localStorage.getItem('deletedItems')){
    newsList = JSON.parse(localStorage.getItem('deletedItems'))
}

document.querySelector('main').addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains("angle__icon")) {
        target.classList.toggle("rotate");
        section = target.closest(".sectionContainer");
        console.log(section)
        section.querySelector(".divContainer").classList.toggle("display-block");
    }

})

document.querySelector('main').addEventListener('touchstart', (e) => {
    if (e.target.tagName =="SECTION") {
        touchElement = e.target;
        touchParentElement = e.target.closest(".categoryNews");
        touchCoordinatesStart = e.touches[0].clientX;
    
        touchElement.addEventListener("touchmove", (e) => {
            if (touchElement.tagName == "SECTION"){
                touchCoordinatesMove = Math.floor(e.touches[0].clientX);
                if (touchCoordinatesMove < touchCoordinatesStart && 
                    touchCoordinatesMove > touchCoordinatesStart - deleteButton) {
            
                    touchElement.style.transform = `translateX(${touchCoordinatesMove - touchCoordinatesStart}px)`;
                }
            }
        });
        
        touchElement.addEventListener('touchend', (e) => {
            if (touchElement.tagName == "SECTION"){
                touchCoordinatesEnd = Math.floor(e.changedTouches[0].clientX);
                if (touchCoordinatesEnd < touchCoordinatesStart - deleteButton / 2 ) {
                    touchElement.style.transform = `translateX(-${deleteButton}px)`;
                }
                else {
                    touchElement.style.transform = `translateX(${e.target.offsetLeft})`;
                }
            }
        });
        
        touchParentElement.querySelector(".archiveItem").onclick = () => {
            touchParentElement.classList.add("animate__animated");
            touchParentElement.classList.add("animate__fadeOutLeft");
            
            let userObject = {
                id: touchParentElement.id,
                name: touchParentElement.querySelector('.swipeItem').textContent
            }
            
            newsList.push(userObject)

            
            console.log(newsList);
            localStorage.setItem('deletedItem', JSON.stringify(newsList));
            touchParentElement.querySelector(".archiveItem").onclick = null;
            
            setTimeout(() => {
                touchParentElement.classList.add("collapsed");
            }, 800);
            
            setTimeout(() => {
                touchParentElement.remove();
            }, 900);  
        }
    };
        
});