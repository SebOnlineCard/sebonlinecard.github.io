const filters = {
  language: "",
};

function setFilter(fieldName, fieldValue) {
  filters[fieldName] = fieldValue;
  const boxesEl = document.querySelectorAll('.box');
  const filterKeys = Object.keys(filters);
  boxesEl.forEach(el => {
    const show = filterKeys.filter(filterKey => filters[filterKey] !== "").every(filterKey => {
      const filterString = filterKey + "--" + filters[filterKey];
      return el.classList.contains(filterString);
    });
    el.style.display = show ? 'inline' : 'none';
  });

}

document.getElementById('languageSelector').addEventListener('change', (e) => {
  setFilter('language', e.target.value);
});

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
	element.dispatchEvent(new Event('change'))
}

selectElement('languageSelector', 'EN');