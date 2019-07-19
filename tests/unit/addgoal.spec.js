import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import goalAdd from '../../src/components/goal_add.vue';

describe('goalAdd', () => {
  let wrapper;

  beforeEach(() => {
    // wrapper = mount(goalAdd);
    // wrapper.setProps({
    //   goalData: {
    //     id: null,
    //     description: null,
    //     keyResults: ['abc'],
    //     reason: null,
    //     statusAndBlock: null,
    //     waysToCrossBlocks: null,
    //     beginDate: null,
    //     endDate: null,
    //     imgsPath: null,
    //   },
    //   goalType: 'add',
    // });
    wrapper = mount(goalAdd, {
      propsData: {
        goalData: {
          id: null,
          description: 'abc',
          keyResults: ['abc'],
          reason: null,
          statusAndBlock: null,
          waysToCrossBlocks: null,
          beginDate: null,
          endDate: null,
          imgsPath: null,
        },
        goalType: 'add',
      },
    });
  });


  describe('clicking the save button', () => {
    beforeEach(() => {
      wrapper
        .find('[test="description"]')
        .setValue('New message');

      wrapper
        .find('[type="primary"]')
        .trigger('click');
    });


    it('clears the text field', () => {
      expect(
        wrapper.find('[test="description"]').text(),
      ).to.equal('abc');
    });

    it('emit send event', () => {
      expect(wrapper.isVisible()).to.equal(false);
    });
  });
});
