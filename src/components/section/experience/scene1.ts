const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .scene {
    max-width: 80vw;
    overflow-x: scroll;
    margin: 0 auto;
  }

  .cards {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 80vw;
    overflow-x: scroll;
    gap: 24px;
    padding: 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 200px;
    min-width: 200px;
    max-height: 300px;
    min-height: 300px;
    border: 2px solid #E0EAF1;
    border-radius: 8px;
    padding: 24px;
    color: #fff;
  }

  .card:hover {
    border: 2px solid #2a89ff;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👀</text></svg>") 16 0,auto; /*!emojicursor.app*/
  }
  
  .card-content {
    word-break: keep-all;
  }

  .tags-warp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
  }

  .tag {
    color: #fff;
    text-decoration: none;
    border: 1px solid #E0EAF1;
    padding: 4px;
    border-radius: 4px;
  }


  a {
    text-decoration: none;
  }

  .more-link:hover, .more-link:focus {
    animation-duration: 3s;
    animation-name: rainbowLink;
    animation-iteration-count: infinite;
  } 

  @keyframes rainbowLink {     
    0% { color: #ff2a2a; }
    15% { color: #ff7a2a; }
    30% { color: #ffc52a; }
    45% { color: #43ff2a; }
    60% { color: #2a89ff; }
    75% { color: #202082; }
    90% { color: #6b2aff; } 
    100% { color: #e82aff; }
  }
`;

template.innerHTML = /* html */ `
  <h2>Projects</h2>
  <div class="scene">
    <section>
      <ul class="cards"></ul>
    </section>
  </div>
`;

const ProjectList = [
  {
    name: '공지사항 관리 시스템 개발',
    period: {
      start: '2019.08',
      end: '2019.10',
    },
    description:
      'Google API를 이용하여 Google Workspace에 작성한 내용을 조회하여, 사내 공지사항 및 일정을 대시보드의 형태로 제공하는 시스템을 개발하였습니다.',
    tags: ['Desktap'],
    link: 'https://gitsunmin.notion.site/dca6ba6ff38042ddadad31b67f3bad1c',
  },
  {
    name: '업무 협업 프로그램 개발',
    period: {
      start: '2019.10',
      end: '2020.10',
    },
    description:
      '문서 공동편집기능을 기반으로 채팅, 할일 관리 등 기능의 협업툴을 개발하였습니다.',
    tags: ['Web'],
    link: 'https://gitsunmin.notion.site/179c4f41db6d4e51b132738a439e5aa6',
  },
  {
    name: '마켓봄 프로 개발',
    period: {
      start: '2020.10',
      end: '2023.08',
    },
    description:
      '마켓봄 프로의 PC, Mobile 웹 그리고 백오피스 웹 서비스를 초기 단계부터 개발 및 운영업무를 담당하였습니다.',
    tags: ['Web', 'Mobile', 'B2B'],
    link: 'https://gitsunmin.notion.site/9c437384d105421aafb89ef21ea673a6',
  },
  {
    name: '마켓보로, 공통 웹뷰 개발',
    period: {
      start: '2023.08',
      end: '2023.12',
    },
    description:
      '마켓보로에서 사용중인 네이티브 하이브리드 앱들을 Flutter로 재개발하여 공통으로 사용할 수 있는 웹뷰 앱을 개발하였습니다.',
    tags: ['App', 'Flutter', 'Web View'],
    link: 'https://gitsunmin.notion.site/f098322d80274c32b621e78d1a2588ee',
  },
  {
    name: '식봄, Next.js로 전환',
    period: {
      start: '2024.01',
      end: '2024.03',
    },
    description:
      '사업자 대상 식자재 E-Commerce 서비스인 식봄의 유지보수 및 Next.js로 전환하는 작업을 하였습니다.',
    tags: ['E-Commerce'],
    link: 'https://gitsunmin.notion.site/Next-js-72cf7aca6d73402cbdd8b80556887aa5',
  },
];

export default class ExperienceScene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot?.appendChild(style.cloneNode(true));
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    const cards$el = this.shadowRoot?.querySelector('.cards') ?? null;

    if (cards$el === null) return;

    cards$el.innerHTML = ProjectList.map((project) => {
      return /* html */ `
        <li>
          <a href="${project.link}">
            <div class="card">
              <h3>${project.name}</h3>
              <span>${project.period.start} ~ ${project.period.end}</span>
              <p class="card-content">${project.description}</p>
              <div class="tags-warp">
                ${project.tags
                  .map((tag) => /* html */ `<span class="tag">${tag}</span>`)
                  .join('')}
              </div>
            </div>
          </a>
        </li>
      `;
    })
      .reverse()
      .join('');
  }
}
