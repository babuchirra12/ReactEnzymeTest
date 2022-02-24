import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

test("For cheking h1 Content", () =>{
  const wrepper = shallow(<App/>);
  expect(wrepper.find('h1').text()).toContain('HI')

})
test("For cheking h2 Content", () =>{
  const wrepper = shallow(<App/>);
  expect(wrepper.find('h2').text()).toContain('bye')

})
test("For cheking h2 Content", () =>{
  const wrepper = shallow(<App name="babu"/>);
  expect(wrepper.find('#welcome').text()).toBe('Welcome babu')

})
test(" cheking State count", () =>{
  const wrepper = shallow(<App name="babu"/>);
  expect(wrepper.find('#intialValue').text()).toContain('0')

})
test(" cheking onClick event", () =>{
  const wrepper = shallow(<App name="babu"/>);
  wrepper.find('button').simulate('click');
  expect(wrepper.find('#intialValue').text()).toContain('1')

})