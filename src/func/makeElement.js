export default function  makeElement(parentId, value) {
  let parent = document.getElementById(parentId)
  let child = document.createElement('span')
  child.textContent = value;
  parent.appendChild(child)
}
