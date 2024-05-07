import TEAM_DB from '../assets/team-db/index';
import iconLinkedin from '../public/team/linkedin.svg';
const teamModalContainerRef = document.querySelector('.team-modal-container');
const teamModalClose = document.querySelector('.team-modal-close');
const teamListRef = document.querySelector('.team-list');

const modalOpenRef = document.querySelector('.btn-open-modal');
modalOpenRef.addEventListener('click', mdTeamShow);

function mdTeamShow() {
  teamModalContainerRef.classList.add('visible');
  document.body.classList.add('body-overflow');
  teamModalClose.addEventListener('click', mdTeamClose);
  teamModalContainerRef.addEventListener('click', eventsOnTeamModal);
  window.addEventListener('keydown', eventsOnTeamModal);
  const teamCardsMarkup = TEAM_DB.map(
    ({
      id,
      nameUa,
      nameEn,
      position,
      linkedin,
      pathToPhotoJPG,
      pathToPhotoWebP,
    }) => {
      return `<li class="member-card" id="${id}">
      <div class="member-pictures">
        <picture class="member-picture" >
          <source
          class="member-photo"
            srcset=${pathToPhotoWebP}
            type="image/webp"
          /> 
          <img
          class="member-photo"
            src=${pathToPhotoJPG}
            alt=${nameEn}
            width="40"
            height="40"
          />
        </picture>
        <a class="linkedin-href" title="linkedin" href=${linkedin} target="_blank" 
         >
            <img class="linkedin-pic" src=${iconLinkedin} alt="linkedin"       width="16"
            height="16"/>
        </a>
      </div>
      <div class="member-discr">
      <p class="member-name">${nameEn}</p>
      <p class="member-position">${position}</p>
      </div>
      </li>`;
    }
  );
  return (teamListRef.innerHTML = teamCardsMarkup.join(''));
}

function eventsOnTeamModal(e) {
  if (e.target === e.currentTarget) mdTeamClose();
  if (e.key === 'Escape') mdTeamClose();
}

function mdTeamClose() {
  teamModalContainerRef.classList.remove('visible');
  document.body.classList.remove('body-overflow');
  teamModalClose.removeEventListener('click', mdTeamClose);
  teamModalContainerRef.removeEventListener('click', eventsOnTeamModal);
  window.removeEventListener('keydown', eventsOnTeamModal);
}
