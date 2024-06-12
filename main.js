// const slider = document.querySelector('.slider');

// const leftArrow = document.querySelector('.left');
// const rightArrow = document.querySelector('.right');
// const projects = document.querySelectorAll('.project');
// const indicatorParents = document.querySelector('.controls ul');

// var sectionIndex = 0;
// const totalProjects = projects.length;
// const shiftPercentage = 100 / totalProjects; // Calculate width percentage

// document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
// 	indicator.addEventListener('click', function () {
// 		sectionIndex = ind;
// 		document.querySelector('.controls .selected').classList.remove('selected');
// 		indicator.classList.add('selected');
// 		slider.style.transform = 'translateX(' + (sectionIndex * -shiftPercentage) + '%)';
// 	})
// })

// rightArrow.addEventListener('click', function () {
// 	sectionIndex = (sectionIndex < totalProjects - 1) ? sectionIndex + 1 : sectionIndex;
// 	document.querySelector('.controls .selected').classList.remove('selected');
// 	indicatorParents.children[sectionIndex].classList.add('selected');
// 	slider.style.transform = 'translateX(' + (sectionIndex * -shiftPercentage) + '%)';
// });

// leftArrow.addEventListener('click', function () {
// 	sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : sectionIndex;
// 	document.querySelector('.controls .selected').classList.remove('selected');
// 	indicatorParents.children[sectionIndex].classList.add('selected');
// 	slider.style.transform = 'translateX(' + (sectionIndex * -shiftPercentage) + '%)';
// });

//refactored code below

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const projects = document.querySelectorAll('.project');
const indicatorParents = document.querySelector('.controls ul');

let sectionIndex = 0;
const totalProjects = projects.length;
const shiftPercentage = 100 / totalProjects; // Calculate width percentage

// Function to update the slider position and the selected indicator
const updateSlider = (newIndex) => {
    sectionIndex = newIndex;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translateX(' + (sectionIndex * -shiftPercentage) + '%)';
};

// Add click event listeners to each indicator
document.querySelectorAll('.controls li').forEach((indicator, ind) => {
    indicator.addEventListener('click', () => updateSlider(ind));
});

// Add click event listener to the right arrow
rightArrow.addEventListener('click', () => {
    const newIndex = sectionIndex < totalProjects - 1 ? sectionIndex + 1 : sectionIndex;
    updateSlider(newIndex);
});

// Add click event listener to the left arrow
leftArrow.addEventListener('click', () => {
    const newIndex = sectionIndex > 0 ? sectionIndex - 1 : sectionIndex;
    updateSlider(newIndex);
});
