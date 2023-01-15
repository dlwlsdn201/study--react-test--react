// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from './mocks/server';

// 모든 테스트 시작 전, server을 listen 상태로 만듬
beforeAll(() => server.listen());

// 각 테스트들이 끝날 때마다, server의 handler 들을 리셋 (다른 테스트들에 영향이 가지 않게 하기 위함)
afterEach(() => server.resetHandlers());

// 모든 테스트 끝난 후, server 종료
afterAll(() => server.close());
