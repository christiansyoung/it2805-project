var items = [
		{
			'name' : 'Galhøi',
			'price' : 4500
		},
		{
			'name' : 'Snøhetta',
			'price' : 6800
		},
		{
			'name' : 'Storebjørn',
			'price' : 4300
		},
		{
			'name' : 'Trolltind',
			'price' : 4700
		},
		{
			'name' : 'Veotind',
			'price' : 12300
		},
		{
			'name' : 'Veslebjørn',
			'price' : 9900
		},
	];

$(function () {
	$('.buy').on('click', function (e) {
		e.preventDefault();
		var id = $(this).data('id');
		$('.item-name').text(items[id]['name']);
		$('.item-value').text(items[id]['price']);
		$('.total').text((parseInt(items[id]['price']) + 300));
		$('#buyModal').modal();
	});
});