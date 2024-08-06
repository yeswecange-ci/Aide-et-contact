document.addEventListener('DOMContentLoaded', function () {
    const allBtn = document.getElementById('allBtn');
    const adslBtn = document.getElementById('adslBtn');
    const fibreBtn = document.getElementById('fibreBtn');
    const equipements = document.querySelectorAll('.grilleequip');
    const buttons = document.querySelectorAll('button');

    allBtn.addEventListener('click', function () {
        setActiveButton(allBtn);
        showEquipements('all');
    });

    adslBtn.addEventListener('click', function () {
        setActiveButton(adslBtn);
        showEquipements('adsl');
    });

    fibreBtn.addEventListener('click', function () {
        setActiveButton(fibreBtn);
        showEquipements('fibre');
    });

    function setActiveButton(activeButton) {
        buttons.forEach(function (button) {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    function showEquipements(type) {
        equipements.forEach(function (equipement) {
            if (type === 'all') {
                equipement.style.display = 'block';
            } else {
                if (equipement.classList.contains(type)) {
                    equipement.style.display = 'block';
                } else {
                    equipement.style.display = 'none';
                }
            }
        });
    }

    // Show all equipments by default and set active button
    setActiveButton(allBtn);
    showEquipements('all');
});
