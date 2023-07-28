function volume_sphere() {
    const radi = document.getElementById('radius');
	const r = parseInt(radi.value);
	console.log(r);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
