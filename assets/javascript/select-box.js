// Simple JQuery Custom SelectBox Plugin
// https://plus.google.com/108949996304093815163/about
(function(a) {
	a.fn.customSelectBox = function(b) {
		b = a.extend({
			selectboxClass: "styled-select",
			buttonClass: "curr",
			selectedClass: "selected",
			disabledClass: "disabled",
			focusedClass: "focused"
		}, b);
		return this.each(function() {
			var g = a(this),
				c = 0;
			g.css("visibility", "hidden").wrap('<div class="' + b.selectboxClass + '"></div>');
			var d = g.parent(),
				f = d.find("option"),
				e = g.find("option:selected").html();
			d.append('<span class="' + b.buttonClass + '">' + e + '</span><ul style="display:none; max-height:20rem; overflow-y: auto; overflow-x: hidden;"></ul>');
			f.each(function(l) {
				var k = a(this),
					m = k.val() ? k.val() : k.html(),
					h = k.html(),
					j = k.is(":selected") ? b.selectedClass : k.is(":disabled") ? b.disabledClass : "";
				d.find("ul").append('<li class="' + j + " o-" + l + '" data-value="' + m + '">' + h + "</li>")
			});
			d.find("." + b.buttonClass).on("mousedown", function(h) {
				a("." + b.selectboxClass + " ." + b.focusedClass).removeClass(b.focusedClass).next().hide();
				if (c == 1) {
					a(this).removeClass(b.focusedClass).next().hide();
					c = 0
				} else {
					a(this).addClass(b.focusedClass).next().show();
					c = 1
				}
				h.stopPropagation();
				a(document).on("mousedown", function() {
					a("." + b.selectboxClass + " ." + b.focusedClass).removeClass(b.focusedClass).next().hide();
					c = 0
				})
			}).next().find("li").on("mousedown", function() {
				if (!a(this).hasClass(b.disabledClass)) {
					a(this).parent().hide().find("." + b.selectedClass).removeClass(b.selectedClass).parent().prev().removeClass(b.focusedClass).text(a(this).text()).prev().val(a(this).data("value")).trigger("change");
					a(this).addClass(b.selectedClass);
					a(this).parent().prev().addClass(b.selectedClass)
				}
				c = 1
			})
		})
	}
})(jQuery);