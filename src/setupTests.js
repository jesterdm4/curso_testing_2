// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


import { server } from "./moks/server";
//establish API mocking before all tests.
beforeAll(() => server.listen())

//reset any request handlers that we may add during the test
//so they dont affect other tests
afterEach(() => server.resetHandlers())

//clean up after the test are finished
afterAll(() => server.close())