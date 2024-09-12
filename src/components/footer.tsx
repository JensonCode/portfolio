import React from 'react';
import SocialLinks from './social-links';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 mx-auto p-4 px-10'>
      <SocialLinks />
      {/* <p>
        3D Model: &quot;
        <a
          href='https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303'
          target='_blank'
          rel='noopener noreferrer'
        >
          Need Some Space
        </a>
        &quot; by Joshua B. Madara. Licensed under
        <a
          href='https://creativecommons.org/licenses/by-nc/4.0/'
          target='_blank'
          rel='noopener noreferrer'
        >
          CC Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
        </a>
        .
      </p> */}
    </footer>
  );
}
