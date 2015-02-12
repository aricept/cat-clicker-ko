var viewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.nicknames = ko.observableArray(['TabMan', 'T-Bone', 'Mr. T', 'Fat-T']);
	this.level = ko.computed(function() {
		var clicks = this.clickCount();
		if (clicks < 10) {
			return 'Newborn';
		}
		else if (clicks < 50) {
			return 'Infant';
		}
		else if (clicks < 100) {
			return 'Child';
		}
		else {
			return 'Teen';
		}
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new viewModel());
