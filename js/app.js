var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		nicknames: ['TabMan', 'T-Bone', 'Mr. T', 'Fat-T']
	},
	{
		clickCount: 0,
		name: 'Shadow',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		nicknames: ['Scooby','Punxatawney']
	},
	{
		clickCount: 0,
		name: 'Mischief',
		imgSrc: 'img/4154543904_6e2428c421_z',
		nicknames: ['Scratchy']
	},
	{
		clickCount: 0,
		name: 'Tom',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		nicknames: ['Hunter']
	}
];

var viewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.changeCat = function() {
		self.currentCat(this);
	}

};

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);
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
};

ko.applyBindings(new viewModel());
