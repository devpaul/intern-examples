const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('functional/Todo', {
	'submit form'() {
		return this.remote
			.get('index.html')
			.setFindTimeout(5000)
			.findByCssSelector('input.new-todo')
			.click()
			.pressKeys('Task 1')
			.pressKeys('\n')
			.pressKeys('Task 2')
			.pressKeys('\n')
			.pressKeys('Task 3')
			.getSpecAttribute('value')
			.then(function (val: string) {
				assert.ok(val.indexOf('Task 3') > -1, 'Task 3 should remain in the new todo');
			});
	}
});
