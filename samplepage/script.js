document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.category-nav a');
    const allCards = document.querySelectorAll('.card');

    console.log('Category Links found:', categoryLinks.length);
    console.log('All Cards found:', allCards.length);

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // リンクのデフォルト動作をキャンセル

            const selectedCategory = link.dataset.category;
            console.log('Selected Category:', selectedCategory);

            allCards.forEach(card => {
                console.log('Card data-category:', card.dataset.category, 'Current display:', card.style.display);
                if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                    card.style.display = 'block'; // カードを表示
                    console.log('Setting display to block for card:', card.dataset.category);
                } else {
                    card.style.display = 'none'; // カードを非表示
                    console.log('Setting display to none for card:', card.dataset.category);
                }
            });
        });
    });
});
