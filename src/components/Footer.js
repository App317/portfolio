import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase">Portfolio Content</h5>
          <p>All of my contact information and copyright.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase">My Links</h5>
          <ul className="list-unstyled">
            <li>
              <FontAwesomeIcon icon={faEnvelope} fixedWidth />
              <a href="#!">Email</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} fixedWidth />
              <a href="#!">GitHub</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} fixedWidth />
              <a href="#!">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mt-md-0 mt-3">
          <p>Portfolio template created by Judy Gab</p>
          <ul className="list-unstyled">
            <li>
              <FontAwesomeIcon icon={faGithub} fixedWidth />
              <a href="#!">Judy Gab's GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        MIT License Copyright (c) 2023 judygab Permission is hereby granted,
        free of charge, to any person obtaining a copy of this software and
        associated documentation files (the "Software"), to deal in the Software
        without restriction, including without limitation the rights to use,
        copy, modify, merge, publish, distribute, sublicense, and/or sell copies
        of the Software, and to permit persons to whom the Software is furnished
        to do so, subject to the following conditions: The above copyright
        notice and this permission notice shall be included in all copies or
        substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS",
        WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
        LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
        HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
        AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
      </p>
    </div>
  </footer>
);

export default Footer;
