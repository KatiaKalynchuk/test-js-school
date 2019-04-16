const params = [
  {
    background: '#00F',
    updateTime: 1000,
    elements: [
      {
        background: '#feff00',
        width: 25
      },
      {
        background: '#a6ff84',
        width: 50
      },
      {
        background: '#b43aff',
        width: 25
      },
    ]
  },
  {
    background: '#7cff5f',
    updateTime: 3000,
    elements: [
      {
        background: '#ffd515',
        width: 25
      },
      {
        background: '#ff3eab',
        width: 50
      },
      {
        background: '#23fffc',
        width: 25
      },
    ]
  },
  {
    background: '#ff0c18',
    updateTime: 2000,
    elements: [
      {
        background: '#ffd841',
        width: 25
      },
      {
        background: '#51ff93',
        width: 50
      },
      {
        background: '#cacaff',
        width: 25
      },
    ]
  }
];

const numberOfColors = 16777215;

function randomColor() {
  return `#${Math.floor(Math.random()*numberOfColors).toString(16)}`;
};

function setBackground(el, updateTime) {
  return setInterval(() => el.style.setProperty('background', randomColor()), updateTime)
}

function getLineHeight(number) {
  return 100 / number;
}

function createFragment(data) {
  let fragment = document.createDocumentFragment();
  const height = getLineHeight(data.length);

  data.forEach(({ elements, updateTime, ...props }) => {
    const line = createElement({ ...props, height });

    if (elements) {
      elements.forEach(item => {
        const div = createElement({ ...item, height: 100 });
        setBackground(div, updateTime);
        line.appendChild(div)
      })
    }

    fragment.appendChild(line)
  });

  return fragment;
}

function createElement({ background, height, width }) {
  const div = document.createElement('div');

  div.style.setProperty('background', background);
  div.style.setProperty('height', `${height}%`);
  div.style.setProperty('width', `${width}%`);

  return div;
}

function render(id, el) {
  document.getElementById(id).appendChild(el);
}

function init() {
  const html = createFragment(params);

  render('lines', html)
}

init();

