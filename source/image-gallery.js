window.addEventListener("load", function() {
	var gallery = document.getElementById("image-gallery");
	if(!gallery)
	{
		gallery = document.createElement("div");
		gallery.setAttribute("id", "image-gallery");
		gallery.style.display = "none";
		document.body.appendChild(gallery);
	}

	var imgnode = gallery.getElementsByTagName("img");
	if(!imgnode || !imgnode.length)
	{
		imgnode = document.createElement("img");
		gallery.appendChild(imgnode);
	}
	else
		imgnode = imgnode[0];

	var img_click_event = function(self) {

		gallery.style.display = (gallery.style.display == "none") ? "" : "none";
		document.body.style.overflow = (document.body.style.overflow == "") ? "hidden": "";
		imgnode.src = self.src;
	}

	var imgs = document.getElementsByTagName("img");
	if(!imgs || !imgs.length)
		return;

	for(let i = 0; i < imgs.length; i++)
	{
		imgs[i].addEventListener("click", function() {
			img_click_event(this);
		});
	}

});