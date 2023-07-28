function volume_sphere(e) {
	e.preventDefault();
    const radi = document.getElementById('radius');
	const r = parseInt(radi.value);
	console.log(r);

	const volume = 4 * 3.14159 * Math.pow(r,3) / 3;
	document.getElementById('volume').value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
