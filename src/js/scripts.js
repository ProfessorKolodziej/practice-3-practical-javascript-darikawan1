// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


/*to do list start*/  
// Toggle Task Complete
function toggleTask(el) {
    el.classList.toggle('checked');
    el.closest('li').classList.toggle('completed');
  }
  
  function formatDate(input) {
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const date = new Date(input.value);
    if (!isNaN(date)) {
      input.setAttribute('data-date', date.toLocaleDateString('en-GB', options));
      input.classList.add('filled');
    }
  }
  
  function toggleEdit(editBtn) {
    const li = editBtn.closest('li');
    const taskName = li.querySelector('.task-name');
  
    if (!li.querySelector('.delete-btn')) {
      const deleteBtn = document.createElement('span');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = '🗑️';
      deleteBtn.addEventListener('click', () => li.remove());
      li.querySelector('.task-content').appendChild(deleteBtn);
    }
  }
  
  document.getElementById('addTaskBtn').addEventListener('click', () => {
    const ul = document.getElementById('todoList');
    const li = document.createElement('li');
  
    li.innerHTML = `
      <span class="checkbox"></span>
      <div class="task-content">
        <div contenteditable="true" class="task-name">New Task</div>
        <input type="date" class="task-date" />
      </div>
    `;
  
    li.querySelector('.checkbox').addEventListener('click', function () {
      toggleTask(this);
    });
  
    li.querySelector('.task-date').addEventListener('change', function () {
      formatDate(this);
    });
  
    const editBtn = document.createElement('span');
    editBtn.className = 'edit-btn';
    editBtn.textContent = '✏️';
    editBtn.addEventListener('click', function () {
      toggleEdit(this);
    });
  
    li.querySelector('.task-content').appendChild(editBtn);
    ul.appendChild(li);
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#todoList li').forEach(li => {
      const checkbox = li.querySelector('.checkbox');
      const dateInput = li.querySelector('.task-date');
  
      if (checkbox) {
        checkbox.addEventListener('click', function () {
          toggleTask(this);
        });
      }
  
      if (dateInput) {
        dateInput.addEventListener('change', function () {
          formatDate(this);
        });
      }
  
      const editBtn = document.createElement('span');
      editBtn.className = 'edit-btn';
      editBtn.textContent = '✏️';
      editBtn.addEventListener('click', function () {
        toggleEdit(this);
      });
  
      li.querySelector('.task-content').appendChild(editBtn);
    });
  });
  
