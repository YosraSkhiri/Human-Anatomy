const { computePosition, autoPlacement, shift, offset } = window.FloatingUIDOM

const HIGHLIGHT_FILL_COLOR = "#ff7f2a"

const DEFAULT_FILL_COLORS = {
  1: "#FFFFFF",
  2: "#000000",
  3: "transparent"
}

const data = {
  figure: [
    {
      id: "section1",
      label: "Lleosacralgelenk rechts",
      defaultColor: DEFAULT_FILL_COLORS[2] ,
      link: "#Lleosacralgelenk-rechts",
    },
    {
      id: "section2",
      label: "Lleosacralgelenk links",
      defaultColor: DEFAULT_FILL_COLORS[2],
      link: "#Lleosacralgelenk-links",
    },
    {
      id: "section3",
      label: "Massa lateralis links",
      defaultColor: DEFAULT_FILL_COLORS[3],
      link: "#Massa-lateralis-links",
    },
    {
      id: "section4",
      label: "Massa lateralis rechts",
      defaultColor: DEFAULT_FILL_COLORS[3],
      link: "#Massa-lateralis-rechts",
    },
    {
      id: "section5",
      label: "OS coccygis",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#OS-coccygis",
    },
    {
      id: "section6",
      label: "SWK1",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#SWK1",
    },
    {
      id: "section7",
      label: "SWK2",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#SWK2",
    },
    {
      id: "section8",
      label: "SWK3",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#SWK3",
    },
    {
      id: "section9",
      label: "SWK4",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#SWK4",
    },
    {
      id: "section10",
      label: "Neuroforamen S1/S2 rechts",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#Neuroforamen-S1-S2-rechts",
    },
    {
      id: "section11",
      label: "Neuroforamen S1/S2 links",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#Neuroforamen-S1-S2-links",
    },
    {
      id: "section12",
      label: "Neuroforamen S2/S3 rechts",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#Neuroforamen-S2-S3-rechts",
    },
    {
      id: "section13",
      label: "Neuroforamen S2/S3 links",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#Neuroforamen-S2-S3-links",
    },
    {
      id: "section14",
      label: "Neuroforamen S3/S4 rechts",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#Neuroforamen-S3-S4-rechts",
    },
    {
      id: "section15",
      label: "Neuroforamen S3/S4 links",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#Neuroforamen-S3-S4-links",
    },
    {
      id: "section16",
      label: "Neuroforamen S4/S5 rechts",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#Neuroforamen-S4-S5-rechts",
    },
    {
      id: "section17",
      label: "Neuroforamen S4/S5 links",
      defaultColor: DEFAULT_FILL_COLORS[1],
      link: "#Neuroforamen-S4-S5-links",
    },
  ]
}

data.figure.forEach((item) => {
  const elem = document.querySelector(`#${item.id}`)
  elem.addEventListener('click', (e) => handleClick(e, item.link))
  elem.addEventListener('mouseover', (e) => handleMouseover(e, elem, item.label))
  elem.addEventListener('mouseout', (e) => handleMouseout(e, elem, item.defaultColor))
})

function handleClick(e, link) {
  window.location.href = window.location.origin + "/sacrum.html" + link
}

function handleMouseover(e, elem, label) {
  const tooltip = document.querySelector('#tooltip')
  elem.style.fill = HIGHLIGHT_FILL_COLOR

  tooltip.innerHTML = label
  tooltip.classList.add('show')

  // Debounce the position computation to prevent excessive calls
  debounce(() => {
    computePosition(elem, tooltip, {
      placement: 'top',
      middleware: [
        offset(10),
        shift({ padding: 10 }),
        autoPlacement({ padding: 10 })
      ]
    }).then(({ x, y }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
        opacity: 1,
      });
    });
  }, 50)()
}

function handleMouseout(e, elem, color) {
  const tooltip = document.querySelector('#tooltip')

  elem.style.fill = color
  tooltip.classList.remove('show')

  tooltip.style.opacity = 0

  tooltip.addEventListener('transitionend', () => {
    tooltip.style.display = 'none'
  }, { once: true })
}

// Debounce utility function
function debounce(func, delay) {
  let timeout
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}
