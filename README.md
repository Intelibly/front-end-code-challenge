# Intelibly Front end code challenge

This project was bootstrapped with following dependencies

- [ReactJS](https://github.com/facebook/create-react-app)
- [Mobx State Tree](https://mobx-state-tree.js.org/intro/welcome)
- [Material UI v4](https://v4.mui.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Description

This code challenge is designed to evaluate developers capability in working with user stories, creating components, managing application state using Mobx State Tree.

Feel free to use provided Material UI component library to help with design language and consistent UI elements.

Each user story should have a corresponding commit and descriptive message. Try to follow the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/)

Each component file should include a test file which asserts that the component can render as well as assert any user interactions like clicks.

## User Stories

- [ ] A user can view a calendar week ![Calendar Week View](/calendar-week-view.jpg)

- [ ] A user can change current calendar week only to the future ![Calendar Week View](/calendar-week-view.jpg)

- [ ] A user can select any day of the week in the future ![Calendar Week View](/calendar-week-view.jpg)

- [ ] A user can select only available time slot for the selected day![Available time slots](/available-time-slots.jpg)

\*\* Grayed out times indicate time slot that are not available and should not be selectable

## Bonus Challenge

In the project's src/models directory you will find a data `snapshot.json` file as well as a `AppointmentsModel.base.js`. Use the provided base model to construct a **NEW** Mobx State Tree (MST) Model that extends from the Base model. Use the newly created model together with the snapshot to display available time slots for the selected date. Keep a field on the model which holds the currently selected day (if any) as well as currently selected time (if any).

You must **NOT** modify the `AppointmentsModel.base.js` model but rather use Mobx State Tree API to extend from it. Reference the Mobx State Tree documentation to learn how to utilize snapshots to hydrate application state.
