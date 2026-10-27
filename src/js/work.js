// filterButtons is a helpful plural name because the result is a collection.
const filterButtons = document.querySelectorAll('.filter-button');

// projectCards is a helpful plural name because the result is a collection.
const projectCards = document.querySelectorAll('.work-gallery .project-card');
const workResults = document.querySelector('.work-results');
const searchParams = new URLSearchParams(window.location.search);
const filter = searchParams.get('filter');

const initialFilter = filter;

console.log(initialFilter);

// console.log(filterButtons);
// console.log(projectCards);

filterButtons.forEach((button) => {
	// Your code here
	button.addEventListener('click', () => {
		const selectedFilter = button.dataset.filter;
		filterButtons.forEach((filterButton) => {
			filterButton.setAttribute('aria-pressed', String(filterButton === button));
		});
		// dataset.filter reads its data-filter value.
		// console.log(button.dataset.filter);
		// console.log(selectedFilter);

		let visibleCount = 0;
		projectCards.forEach((card) => {
			// console.log(card.dataset.category);

			const shouldShow =
				selectedFilter === 'all' || card.dataset.category === selectedFilter;
			// console.log(shouldShow);
			// Once those match, the next step is setting each card’s hidden property. Think about the relationship: when shouldShow is true, hidden should be false. The ! operator reverses a Boolean.
			if (shouldShow) {
				// I originally put count++ but it should have been the varible I declared - visibleCount.
				visibleCount++;
			}
			card.hidden = !shouldShow;
		});
		if (visibleCount === 1) {
			workResults.textContent = visibleCount + ' project shown';
		} else {
			workResults.textContent = visibleCount + ' projects shown';
		}
		// workResults.textContent = visibleCount + ' Project shown';
		// console.log(visibleCount);
	});
	filterButtons.forEach((button) => {
		if (button.dataset.filter === initialFilter) {
			// console.log(button);
			button.click();
		}
	});
});
