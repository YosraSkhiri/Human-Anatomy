const { computePosition } = window.FloatingUIDOM

const HIGHLIGHT_COLOR_FILL = "#F0C17B"
const DEFAULT_COLOR_FILL = "#F8F5E6"

const data = {
  figure1: [
    {
      id: "section1",
      label: "Femur",
      link: "#femur",
    },
    {
      id: "section2",
      label: "Patella",
      link: "#patella",
    },
    {
      id: "section3",
      label: "Tibia",
      link: "#tibia",
    },
    {
      id: "section4",
      label: "Fibula",
      link: "#fibula",
    },
  ]
}

data.figure1.forEach((item) => {
  const elem = document.querySelector(`#${item.id}`)
  elem.addEventListener('click', (e) => handleClick(e, item.link))
  elem.addEventListener('mouseover', (e) => handleMouseover(e, elem, item.label))
  elem.addEventListener('mouseout', (e) => handleMouseout(e, elem))
})

function handleClick(e, link) {
  window.location.href = window.location.origin + link
}

function handleMouseover(e, elem, label) {
  const tooltip = document.querySelector('#tooltip')
  elem.style.fill = HIGHLIGHT_COLOR_FILL

  tooltip.innerHTML = label
  tooltip.classList.add('show')

  // Debounce the position computation to prevent excessive calls
  debounce(() => {
    computePosition(elem, tooltip).then(({ x, y }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      })
    })
  }, 50)()
}

function handleMouseout(e, elem) {
  const tooltip = document.querySelector('#tooltip')

  elem.style.fill = DEFAULT_COLOR_FILL
  tooltip.classList.remove('show')
}

// Debounce utility function
function debounce(func, delay) {
  let timeout
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}
