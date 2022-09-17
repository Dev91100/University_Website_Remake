// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import './RectangularInfoCard.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const NAVIGATE = ['/', '/sign-up'];

export const RectangularInfoCard = ({
  imgPath,
  imgAlt,
  backgroundColor,
  includeDate,
  day,
  date,
  contentTitle,
  contentText,
  buttonText,
  onClick,
  buttonStyle,
  buttonSize, 
  navigateTo
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkNavigate = navigateTo ? navigateTo : NAVIGATE[0];

  return (
    <div className="rectangular-info-card-wrap" style={{backgroundColor: '#eee'}}>
      <div className="rectangular-info-card" style={{backgroundColor: '#fff', boxShadow: '0 1.4rem 8rem rgba(0,0,0,.2)'}}>
          <div className="rectangular-info-card-img">
            <img
                alt={'${imgAlt}'}
                // src={'${imgPath}'}
                src='images/img-2.jpg'
            />
          </div>
          <div className="rectangular-info-card-data">
            <div className="rectangular-info-card-date">
              <span>Sunday</span>
              <span>October 27 2019</span>
            </div>
            <h1 className="rectangular-info-card-title">Shark Sighting</h1>
            <p className="rectangular-info-card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam rem adipisci fugiat ab vitae accusamus ea quibusdam ducimus iure eveniet laudantium modi qui commodi perspiciatis doloribus reiciendis, nesciunt quis!
            </p>
            <a href="#" className='rectangular-info-card-cta'>Read More</a>
          </div>
      </div>
    </div>
    // <Link to={`${checkNavigate}`} className='btn-mobile'>
    //   <button
    //     className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    //     onClick={onClick}
    //     type={type}
    //   >
    //     {children}
    //   </button>
    // </Link>
  );
};
