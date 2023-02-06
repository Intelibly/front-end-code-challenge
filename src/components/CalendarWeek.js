import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

function CalendarWeek() {
  return (
    <div data-testid="calendar-week">
      <Datepicker
        controls={['calendar']}
        display="inline"
        calendarType="week"
        calendarSize={1}
      />
    </div>
  );
}

export default CalendarWeek;
