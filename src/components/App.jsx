import React, { useState } from 'react';
import Section from './FeedbackComponents/section.jsx';
import Options from './FeedbackComponents/options.jsx';
import Statistics from './FeedbackComponents/statistics.jsx';
import Notification from './FeedbackComponents/notification.jsx';
import CSS from './app.module.css';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const increment = key => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [key]: prevFeedback[key] + 1,
    }));
  };

  const totalFeedback = feedback => {
    return Object.values(feedback).reduce((prev, el) => prev + el, 0);
  };

  const positiveFeedbackPercentage = (good, total) => {
    const positivePercentage = Math.round((good / total) * 100);
    return isNaN(positivePercentage) ? 0 : positivePercentage;
  };

  const { good, neutral, bad } = feedback;
  const total = totalFeedback(feedback);
  const positive = positiveFeedbackPercentage(good, total);

  return (
    <div className={CSS.App}>
      <Section title="Please leave feedback of this App:">
        <Options buttons={Object.keys(feedback)} click={increment} />
      </Section>

      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <Notification message="There is no feedback! :(" />
        )}
      </Section>
    </div>
  );
}

export default App;
