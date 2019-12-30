import React from 'react';
import PropTypes from 'prop-types';
import VerticalBox from './VerticalBox';
import HorizontalBox from './HorizontalBox';

function CenteredContainer({ children }) {
  return (
    <VerticalBox>
      <HorizontalBox>
        {children}
      </HorizontalBox>
    </VerticalBox>
  );
}

CenteredContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CenteredContainer;
