import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import goalAdd from '@/components/goal_add.vue';

describe('goalAdd', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(goalAdd);
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
        wrapper.find('[test="description"]').element.value,
      ).to.equal('');
    });

    it('emit send event', () => {
      expect(wrapper.emitted().sned[0]).to.deep.equal(['New message']);
    });
  });
});
