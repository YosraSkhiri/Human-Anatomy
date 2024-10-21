const { computePosition, autoPlacement, shift, offset } = window.FloatingUIDOM

const HIGHLIGHT_FILL_COLOR = "#C01045"

const data = {
  sacrum: [
    {
      id: "section1",
      label: "Ileosacralgelenk rechts",
      defaultColor: "#ec8800" ,
      link: "#",
      svgAttribute: "stroke",
    },
    {
      id: "section2",
      label: "Ileosacralgelenk links",
      defaultColor: "#ec8800",
      link: "#",
      svgAttribute: "stroke",
    },
    {
      id: "section3",
      label: "Massa lateralis rechts",
      defaultColor: "#ffb908",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section4",
      label: "Massa lateralis links",
      defaultColor: "#ffb908",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section5",
      label: "SWK1",
      defaultColor: "#ffd42a",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section6",
      label: "SWK2",
      defaultColor: "#ffd42a",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section7",
      label: "SWK3",
      defaultColor: "#ffd42a",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section8",
      label: "SWK4",
      defaultColor: "#ffd42a",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section9",
      label: "SWK5",
      defaultColor: "#ffd42a",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section10",
      label: "Os coccygis",
      defaultColor: "#ffb380",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section11",
      label: "Neuroforamen S1/S2 rechts",
      defaultColor: "#FFFFFF",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section12",
      label: "Neuroforamen S1/S2 links",
      defaultColor: "#FFFFFF",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section13",
      label: "Neuroforamen S2/S3 rechts",
      defaultColor: "#FFFFFF",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section14",
      label: "Neuroforamen S2/S3 links",
      defaultColor: "#FFFFFF",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section15",
      label: "Neuroforamen S3/S4 rechts",
      defaultColor: "#FFFFFF",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section16",
      label: "Neuroforamen S3/S4 links",
      defaultColor: "#FFFFFF",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section17",
      label: "Neuroforamen S4/S5 rechts",
      defaultColor: "#FFFFFF",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section18",
      label: "Neuroforamen S4/S5 links",
      defaultColor: "#FFFFFF",
      link: "#",
      svgAttribute: "fill",
    },
  ],
  "lws-sagital": [
    {
      id: "section-1",
      label: "Wirbelkörper BWK10",
      defaultColor: "#f9eccc",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-2",
      label: "Wirbelkörper BWK11",
      defaultColor: "#f9eccc",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-3",
      label: "Wirbelkörper BWK12",
      defaultColor: "#f9eccc",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-4",
      label: "Wirbelkörper LWK1",
      defaultColor: "#f9eccc",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-5",
      label: "Wirbelkörper LWK2",
      defaultColor: "#f9eccc",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-6",
      label: "Wirbelkörper LWK3",
      defaultColor: "#f9eccc",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-7",
      label: "Wirbelkörper LWK4",
      defaultColor: "#f9eccc",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-8",
      label: "Wirbelkörper LWK5",
      defaultColor: "#f9eccc",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-9",
      label: "SWK1",
      defaultColor: "#ffd42a",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-10",
      label: "Os Sacrum",
      defaultColor: "#f9eccc",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-11",
      label: "Os Coccygis",
      defaultColor: "#ffb380",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-12",
      label: "Deckplatte BWK10",
      defaultColor: "#ec7600",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-13",
      label: "Grundplatte BWK10",
      defaultColor: "#ff7c72",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-14",
      label: "Deckplatte BWK11",
      defaultColor: "#ec7600",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-15",
      label: "Grundplatte BWK11",
      defaultColor: "#ff7c72",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-16",
      label: "Deckplatte BWK12",
      defaultColor: "#ec7600",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-17",
      label: "Grundplatte BWK12",
      defaultColor: "#ff7c72",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-18",
      label: "Deckplatte LWK1",
      defaultColor: "#ec7600",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-19",
      label: "Grundplatte LWK1",
      defaultColor: "#ff7c72",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-20",
      label: "Deckplatte LWK2",
      defaultColor: "#ec7600",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-21",
      label: "Grundplatte LWK2",
      defaultColor: "#ff7c72",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-22",
      label: "Deckplatte LWK3",
      defaultColor: "#ec7600",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-23",
      label: "Grundplatte LWK3",
      defaultColor: "#ff7c72",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-24",
      label: "Deckplatte LWK4",
      defaultColor: "#ec7600",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-25",
      label: "Grundplatte LWK4",
      defaultColor: "#ff7c72",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-26",
      label: "Deckplatte LWK5",
      defaultColor: "#ec7600",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-27",
      label: "Grundplatte LWK5",
      defaultColor: "#ff7c72",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-28",
      label: "Querfortsatz B10",
      defaultColor: "#8cde00",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-29",
      label: "Querfortsatz B11",
      defaultColor: "#8cde00",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-30",
      label: "Querfortsatz B12",
      defaultColor: "#8cde00",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-31",
      label: "Querfortsatz L1",
      defaultColor: "#8cde00",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-32",
      label: "Querfortsatz L2",
      defaultColor: "#8cde00",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-33",
      label: "Querfortsatz L3",
      defaultColor: "#8cde00",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-34",
      label: "Querfortsatz L4",
      defaultColor: "#8cde00",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-35",
      label: "Querfortsatz L5",
      defaultColor: "#8cde00",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-36",
      label: "Dornfortsatz B10",
      defaultColor: "#00ba4d",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-37",
      label: "Dornfortsatz B11",
      defaultColor: "#00ba4d",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-38",
      label: "Dornfortsatz B12",
      defaultColor: "#00ba4d",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-39",
      label: "Dornfortsatz L1",
      defaultColor: "#00ba4d",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-40",
      label: "Dornfortsatz L2",
      defaultColor: "#00ba4d",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-41",
      label: "Dornfortsatz L3",
      defaultColor: "#00ba4d",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-42",
      label: "Dornfortsatz L4",
      defaultColor: "#00ba4d",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-43",
      label: "Dornfortsatz L5",
      defaultColor: "#00ba4d",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-44",
      label: "Facettengelenk B10/11",
      defaultColor: "#80ffb2",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-45",
      label: "Facettengelenk B11/12",
      defaultColor: "#80ffb2",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-46",
      label: "Facettengelenk B12/L1",
      defaultColor: "#80ffb2",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-47",
      label: "Facettengelenk L1/2",
      defaultColor: "#80ffb2",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-48",
      label: "Facettengelenk L2/3",
      defaultColor: "#80ffb2",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-49",
      label: "Facettengelenk L3/4",
      defaultColor: "#80ffb2",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-50",
      label: "Facettengelenk L4/5",
      defaultColor: "#80ffb2",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-51",
      label: "Bandscheiben B10/11",
      defaultColor: "#72cbef",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-52",
      label: "Bandscheiben B11/12",
      defaultColor: "#72cbef",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-53",
      label: "Bandscheiben B12/L1",
      defaultColor: "#72cbef",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-54",
      label: "Bandscheiben L1/2",
      defaultColor: "#72cbef",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-55",
      label: "Bandscheiben L2/3",
      defaultColor: "#72cbef",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-56",
      label: "Bandscheiben L3/4",
      defaultColor: "#72cbef",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-57",
      label: "Bandscheiben L4/5",
      defaultColor: "#72cbef",
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section-58",
      label: "Bandscheiben L5/S1",
      defaultColor: "#72cbef",
      link: "#",
      svgAttribute: "fill",
    },
  ],
  "lws-axial": [
    {
      id: "section_1",
      label: "Corpus anterior",
      defaultColor: "#ffb908" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_2",
      label: "Corpus rechts",
      defaultColor: "#ffb908" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_3",
      label: "Corpus posterior",
      defaultColor: "#ffb908" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_4",
      label: "Corpus links",
      defaultColor: "#ffb908" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_5",
      label: "Median",
      defaultColor: "#00a2f1" ,
      link: "#",
      svgAttribute: "stroke",
    },
    {
      id: "section_6",
      label: "Rezessus rechts",
      defaultColor: "#f1d300" ,
      link: "#",
      svgAttribute: "stroke",
    },
    {
      id: "section_7",
      label: "Paramedian rechts",
      defaultColor: "#26f100" ,
      link: "#",
      svgAttribute: "stroke",
    },
    {
      id: "section_8",
      label: "Paramedian links",
      defaultColor: "#26f100" ,
      link: "#",
      svgAttribute: "stroke",
    },
    {
      id: "section_9",
      label: "Rezessus links",
      defaultColor: "#f1d300" ,
      link: "#",
      svgAttribute: "stroke",
    },
    {
      id: "section_10",
      label: "Foramen vertebrale",
      defaultColor: "#ffffff" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_11",
      label: "Neuroforamen links",
      defaultColor: "#803300" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_12",
      label: "Neuroforamen rechts",
      defaultColor: "#803300" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_13",
      label: "Pedunkel links",
      defaultColor: "#ffb380" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_14",
      label: "Pedunkel rechts",
      defaultColor: "#ffb380" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_15",
      label: "Proc. transversalis links",
      defaultColor: "#ec7600" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_16",
      label: "Proc. transversalis rechts",
      defaultColor: "#ec7600" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_17",
      label: "Facettengelenk links",
      defaultColor: "#ff7c72" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_18",
      label: "Facettengelenk rechts",
      defaultColor: "#ff7c72" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_19",
      label: "Lamina links",
      defaultColor: "#8cde00" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_20",
      label: "Lamina rechts",
      defaultColor: "#8cde00" ,
      link: "#",
      svgAttribute: "fill",
    },
    {
      id: "section_21",
      label: "Proc. spinosus",
      defaultColor: "#00ba4d" ,
      link: "#",
      svgAttribute: "fill",
    },
  ]
}

Object.keys(data).forEach((key) => {
  data[key].forEach((item) => {
    const elem = document.querySelector(`#${item.id}`)
    if(elem) {
      elem.addEventListener('click', (e) => handleClick(e, item.link))
      elem.addEventListener('mouseover', (e) => handleMouseover(e, elem, item.label, item.svgAttribute))
      elem.addEventListener('mouseout', (e) => handleMouseout(e, elem, item.defaultColor, item.svgAttribute))
    }
  })
})

function handleClick(e, link) {
  window.location.href = window.location.origin + "/sacrum.html" + link
}

function handleMouseover(e, elem, label, svgAttribute) {
  const tooltip = document.querySelector('#tooltip')

  elem.style[svgAttribute] = HIGHLIGHT_FILL_COLOR

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

function handleMouseout(e, elem, defaultColor, svgAttribute) {
  const tooltip = document.querySelector('#tooltip')

  elem.style[svgAttribute] = defaultColor
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
