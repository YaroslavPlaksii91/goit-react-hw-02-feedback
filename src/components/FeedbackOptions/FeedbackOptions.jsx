import { Component } from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map(option => {
          return (
            <button
              key={option}
              type="button"
              className={s.btn}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
