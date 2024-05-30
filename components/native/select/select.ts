const selectElement = document.getElementById('select-element') as HTMLDivElement;
const selectButton = document.getElementById('select-button') as HTMLButtonElement;
const selectOptions = document.querySelectorAll('.select__option') as NodeListOf<HTMLInputElement>;

const toggleIsSelectOpen = () => {
  selectElement?.classList.toggle('select--open')
}

const closeSelect = () => {
  selectElement?.classList.remove('select--open');
}

const selectOption = (e: Event) => {
  const optionInput = (e.target as HTMLInputElement);
  let optionLabel: string;
  if (optionInput.labels) {
    optionLabel = optionInput.labels[0].innerHTML;
    selectButton.children[0].innerHTML = optionLabel;
  }
  closeSelect();
}

selectButton?.addEventListener('click', toggleIsSelectOpen);

selectOptions.forEach((option) => {
  option.addEventListener('change', selectOption);
})