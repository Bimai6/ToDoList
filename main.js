const taskAddContainer = document.getElementById("add_new_task_input");

let isInputView = false; 

taskAddContainer.addEventListener("click", (event) => {
  if (!isInputView) {
    handleClick();
  }

  const target = event.target;
  if (isInputView && target.closest("#task_canceled")) {
    handleBack();
  }
});

function handleClick() {
  if (isInputView) return; 

  taskAddContainer.classList.add("no-hover");
  taskAddContainer.innerHTML = `
    <input type="text" name="task_name" id="task_name" placeholder="Write the task">
    <input type="date" name="task_date" id="task_date">
    <svg id="task_confirmed" width="37px" height="37px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm5.7279221 11-7.0710679 7.0710678-4.2426406-4.2426407-1.4142136 1.4142136 5.6568542 5.6568542 8.4852814-8.4852813z" fill="#444444" fill-rule="evenodd"/>
    </svg>
    <svg id="task_canceled" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z" fill="#444444"/>
    </svg>
  `;

  isInputView = true; 
}

function handleBack() {
  if (!isInputView) return; 

  taskAddContainer.innerHTML = `
    <svg version="1.1" id="add_btn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 511.999 511.999" xml:space="preserve">
      <circle cx="255.999" cy="255.999" r="255.999" fill="#444444"/>
      <g>
        <rect x="243.999" y="119.999" fill="#FFFFFF" width="24" height="272.001"/>
        <rect x="119.999" y="243.999" fill="#FFFFFF" width="272.001" height="24"/>
      </g>
    </svg>
    <p>Add a new task</p>
  `;
  taskAddContainer.classList.remove("no-hover");

  isInputView = false;
}