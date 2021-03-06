import React from 'react';

import logo from '../images/logo.svg';

import LayoutFooterSocial from './Social';

import './Footer.scss';

const LayoutFooter = ({ content }) => (
  <footer className="LayoutFooter">
    <div className="LayoutFooter__information">
      <h3
        className="LayoutFooter__information__logo"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <a href="#intro">Overmorrow</a>
      </h3>

      <div className="LayoutFooter__information__legal">
        <span className="LayoutFooter__information__legal__copyright">
          2019 Overmorrow Brewing Company Limited
        </span>

        <span className="LayoutFooter__information__legal__address">
          Công Ty TNHH Bia Ngày Nối Tiếp • <strong>Address:</strong> Xã Đông Dư,
          Gia Lâm, Hà Nội
        </span>

        <span className="LayoutFooter__information__legal__design-services">
          {content.designAttribution}{' '}
          <a
            href={content.designerUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {content.designerName}
          </a>
        </span>
      </div>
    </div>

    <LayoutFooterSocial />
  </footer>
);

export default LayoutFooter;
