import { render, screen } from '@testing-library/react';
import CalendarWeek from './CalendarWeek';

test('renders without crashing', () => {
  render(<CalendarWeek />);

  const calendarWeek = screen.getByTestId('calendar-week');

  expect(calendarWeek).toBeInTheDocument();
});
