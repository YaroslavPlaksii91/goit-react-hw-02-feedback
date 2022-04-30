import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <section>
        <h2 className={s.title}>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
