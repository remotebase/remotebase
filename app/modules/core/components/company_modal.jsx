import React from 'react';
import {Modal} from 'react-bootstrap';
import classnames from 'classnames';
import {pathFor} from '/app/modules/core/libs/helpers';
import ModalOverview from '../containers/modal_overview';
import ModalWork from '../containers/modal_work';
import ModalTechnology from '../containers/modal_technology';

const CompanyModal = ({company, navToHome, companyTab}) => {
  if (company) {
    return (
      <Modal show={true}
          className="company-modal"
          onHide={navToHome.bind(this)} >
        <Modal.Header closeButton>
          <img src={company.getLogoUrl()} alt="company" className="company-logo" />
          <Modal.Title>
            {company.name}
            <a className="company-link"
              href={company.website}
              target="_blank">
              <i className="fa fa-external-link"></i>
            </a>
          </Modal.Title>
          <div>
            {company.description}
          </div>
        </Modal.Header>

        <div className="menu-bar">
          <ul className="list-unstyled menu-list">
            <li className="menu-item">
              <a href={pathFor('company', {companySlug: company.slug})}
                className={classnames({active: !companyTab})}>
                Overview
              </a>
            </li>
            <li className="menu-item">
              <a href={pathFor('company', {companySlug: company.slug, query: {tab: 'work'}})}
                className={classnames({active: companyTab === 'work'})}>
                Work
              </a>
            </li>
            <li className="menu-item">
              <a href={pathFor('company', {companySlug: company.slug, query: {tab: 'tech'}})}
                className={classnames({active: companyTab === 'tech'})}>
                Technology
              </a>
            </li>
          </ul>
        </div>

        <Modal.Body>
          <ModalOverview company={company} isActive={!companyTab} />
          <ModalWork company={company} isActive={companyTab === 'work'} />
          <ModalTechnology company={company} isActive={companyTab === 'tech'} />
        </Modal.Body>
      </Modal>
    );
  } else {
    return <span></span>;
  }
};

export default CompanyModal;