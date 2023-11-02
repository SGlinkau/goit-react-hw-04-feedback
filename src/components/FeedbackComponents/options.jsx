import React from 'react';
import PropTypes from 'prop-types';
import styles from './options.module.css';

function Options({ buttons, click }) {
  return (
    <div className={styles.section}>
      {buttons.map(id => (
        <button key={id} className={id} onClick={() => click(id)}>
          {id}
        </button>
      ))}
    </div>
  );
}

Options.propTypes = {
  buttons: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};

export default Options;
