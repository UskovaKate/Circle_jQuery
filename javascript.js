$(function() {
	var circle = $("#circle");
	$("#radius").selectmenu({
		change: function(event, data) {
			circle.css({
				width: data.item.value,
				height: data.item.value
			})
		}
	});
	$("#color").selectmenu({
		change: function(event, data) {
			circle.css("background", data.item.value)
		}
	})
});


/*След код*/

$(function() {
	function handleShape(e) {
		$(".shape").removeClass("circle pill square rectangle").addClass($(e.target).val())
	};

	function handleToggle(e) {
		var target = $(e.target);
		if(target.is(".brand-toggle")) {
			var checked = target.is(":checked"),
				value = $("[name='brand']").filter(":checked").attr("data-" + target[0].id);
			$(".shape").css(target[0].id, checked ? value : "")
		} else {
			$(".shape").toggleClass(target[0].id, target.is(":checked"))
		}
	}

	function updateBrand() {
		handleShape({
			target: $("[name='shape']:checked")
		});
		$(".toggle:checked").each(function() {
			handleToggle({
				target: $(this)
			})
		})
	}
	$(".controls input").checkboxradio();
	$(".shape-bar, .brand").controlgroup();
	$(".toggles").controlgroup({
		direction: "vertical"
	});
	$("[name='shape']").on("change", handleShape);
	$(".toggle").on("change", handleToggle);
	$("[name='brand']").on("change", updateBrand);
	updateBrand()
});
