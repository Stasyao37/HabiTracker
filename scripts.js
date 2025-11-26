let habits = [];

const habitForm = document.getElementById('habitForm');
const habitInput = document.getElementById('habitInput');
const habitList = document.getElementById('habitList');

function loadHabits(){
    const saved = localStorage.getItem('habits');
    if (saved){
        habits = JSON.parse(saved);
        renderHabits();
    }
}
//I just like to live
function saveHabits(){
    localStorage.setItem('habits', JSON.stringify(habits));
}

function renderHabits(){
    habitList.innerHTML = '';

    if(habits.length === 0){
        const emptyHabits = document.createElement('p');
        emptyHabits.textContent = "Здесь пока нет привычек. Добавьте первую!";
        habitList.appendChild(emptyHabits);
        return;
    }


    habits.forEach(habit=> {
        const card = document.createElement('div');
        const habitName = document.createElement('p');
        const doneBtn = document.createElement('button')
        card.className = 'habit-card';
        habitName.className = 'habitName';
        doneBtn.className = 'doneBtn';
        habitName.textContent =  habit.name;
        doneBtn.textContent = 'Сделано';

        doneBtn.addEventListener('click', ()=>{
            doneBtn.textContent = '';
            const congrats = document.createElement('img');
            congrats.src = "done.svg";
            doneBtn.appendChild(congrats);
        });

        card.appendChild(habitName);
        card.appendChild(doneBtn);
        habitList.appendChild(card);
    });
}

habitForm.addEventListener('submit', function(event){
   event.preventDefault();
   const habitName = habitInput.value.trim();
   if (!habitName) return;

   const newHabit = {
       id: Date.now(),
       name: habitName,
       doneDays: []
    };

   habits.push(newHabit);
   saveHabits();
   renderHabits();
   habitInput.value = '';

});



loadHabits();
