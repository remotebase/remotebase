import React from 'react';
import classnames from 'classnames';

const ModalWork = ({company, isActive}) => (
  <div className={classnames('tab', 'tab-work', {active: isActive})}>
    <div className="row">
      <div className="col-xs-12 col-sm-12 text-xs-center">
        <ul className="list-unstyled">
          <li className="trait-item">
            <span className="item-name">
              Async Collaboration:
            </span>
            <span className="item-value">
              {company.asynchronous_collaboration ? 'Yes' : 'No'}
            </span>
          </li>
          <li className="trait-item">
            <span className="item-name">
              Communication methods:
            </span>
            <span className="item-value">

            </span>
          </li>
          <li className="trait-item">
            <span className="item-name">
              Collaboration methods:
            </span>
            <span className="item-value">

            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ModalWork;
