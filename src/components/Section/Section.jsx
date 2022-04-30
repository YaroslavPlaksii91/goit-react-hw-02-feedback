import { Component } from 'react';
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

export default Section;
