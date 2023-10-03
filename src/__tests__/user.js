import loadUser from '../loadUser.js';
import { httpGet } from '../http.js';
jest.mock('../http.js');

beforeEach(() => {
	jest.resetAllMocks();
});
test('should call loadUser once', () => {
	httpGet.mockReturnValue(JSON.stringify({}));
	loadUser(1);
	expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});